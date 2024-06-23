import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { Button } from "../../components/Button/Button";
import { validateEmail, validateName, validatePassword } from "../../utils/validators.server";
import { login, register } from "../../utils/auth.server";
import { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export const meta = () => {
  return [{ title: "Login" }];
};
export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  let firstName = String(formData.get('firstName'));
  let lastName = String(formData.get('lastName'));
  const action = String(formData.get("_action"))

  if (typeof email !== 'string' || typeof password !== 'string') {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
  }


  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...(action === 'register'? {
      firstName: validateName(firstName),
      lastName: validateName(lastName)
    } :{})
  }
  if (Object.values(errors).some(Boolean)) {
        return json({errors, fields: {email, password }}, {status: 400 })
  }
  switch(action) {
   case 'login': {
     return await login({email, password})
   }
   case 'register': {
     return await register({firstName, lastName, email, password})
   }
   default:
    return json({error: 'Invalid Form Data' }, {status: 400})
  }
}
export default function LoginRoute() {
  const [action, setAction] = useState('login')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  const actionData = useActionData();
  console.table(actionData)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setFormData(form => ({...form, [field]: event.target.value }))
  }

  const handleActionChange = () => {
    action === 'login' ? setAction('register') : setAction('login')
  }

  return (
    <div className="wrapper">
      <div className="justify-center items-center flex flex-col gap-y-3">
          <h1 className="text-3xl font-semibold self-start">{action === 'login'? 'Login to your account': 'Create your account'}</h1>
          <Form method="post" className="rounded-2xl w-96">
            { action === 'register' ?
              <RegisterForm formData={formData} onClick={handleInputChange} />
            :
              <LoginForm formData={formData} onClick={handleInputChange} />
            }
            <Button type="submit" name="_action" value={action} className="w-full" variant="primary" size="md">
              {action === 'login' ? 'Submit' : 'Create Account'}
            </Button>
          </Form>
          <div>
            {action === 'login' ? "Don't have an account?" : 'Already have an account?' }{' '}
            <Button variant="linkColor" size="sm" onClick={() => handleActionChange()}>
                {action === 'login' ? 'Sign up' : 'Sign in' }
            </Button>
          </div>
      </div>
  </div>
  );
}

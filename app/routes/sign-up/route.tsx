import { Form, Link } from "@remix-run/react";
import { Button } from "../../components/Button/Button";
import Label from "../../components/Form/Label/Label";
import Input from "../../components/Form/Input/Input";
import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";
import { validateEmail, validateName, validatePassword } from "../../utils/validators.server";
import { register } from "../../utils/auth.server";

export const meta = () => {
  return [{ title: "Create Account" }];
};

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData()

  const email = form.get('email')
  const password = form.get('password')
  const firstName = form.get('first_name')
  const lastName = form.get('last_name')

  if (typeof email !== 'string' || typeof password !== 'string' || typeof firstName !== 'string' || typeof lastName !== 'string') {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    firstName: validateName(firstName),
    lastName: validateName(lastName)
  }

  if (Object.values(errors).some(Boolean)) {
    return json({errors, fields: {email, password, firstName, lastName}}, {status: 400 })
  }

  return await register({email, password, firstName, lastName})
}
export default function SignUpRoute() {
  return (
    <div className="h-full justify-center items-center flex flex-col gap-y-4">
        <h1 className="text-3xl">Create your account</h1>
        <Form method="post" className="rounded-2xl p-6 w-96">
          <div className="flex flex-col">
            <Label htmlFor="first_name">First Name</Label>
            <Input type="text" id="first_name" name="first_name" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="last_name">Last Name</Label>
            <Input type="text" id="last_name" name="last_name" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" />
          </div>
          <Button type="submit" className="w-full" variant="primary" size="md">
            Submit
          </Button>
        </Form>
        <div>
          {/* <ul>
            <li className="text-neutral-700">8 -64 Characters</li>
            <li className="text-neutral-700">One uppercase letter</li>
            <li className="text-neutral-700">One lowercase letter</li>
            <li className="text-neutral-700">One number</li>
            <li className="text-neutral-700">One special character (e.g. , ! @ # $ % ^ & *)</li>
          </ul> */}
          <p>
            Already have an account?{" "}
            <Link to="/sign-in">
              <Button variant="linkColor" size="sm">
                Sign In
              </Button>
            </Link>
          </p>
        </div>
    </div>
  );
}

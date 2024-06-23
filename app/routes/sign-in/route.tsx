import { ActionFunction, ActionFunctionArgs, json } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { Button } from "../../components/Button/Button";
import Error  from "../../components/Error/Error";
import Input from "../../components/Form/Input/Input";
import Label from "../../components/Form/Label/Label";
import { validateEmail, validatePassword } from "../../utils/validators.server";
import { login } from "../../utils/auth.server";

export const meta = () => {
  return [{ title: "Login" }];
};
export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (typeof email !== 'string' || typeof password !== 'string') {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 })
  }
  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
  }

  if (Object.values(errors).some(Boolean)) {
        return json({errors, fields: {email, password }}, {status: 400 })
  }

  return login({email, password})
}
export default function LoginRoute() {
  return (
    <div className="h-full justify-center items-center flex flex-col gap-y-4">
        <h1 className="text-3xl">Log in to your account</h1>
        <Form method="post" className="rounded-2xl p-6 w-96">
          <div className="flex flex-col">
            <Label htmlFor="email">Email</Label>

            <Input type="email" id="email" name="email" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="password" className="text-sm">Password</Label>

            <Input type="password" id="password" name="password" />
          </div>
          <Button type="submit" className="w-full" variant="primary" size="md">
            Submit
          </Button>
        </Form>
        <div>
          <p>
            Don't have an account?{" "}
          <Button variant="linkColor" size="sm">
            <Link to="/sign-up">
                Sign up
            </Link>
          </Button>
          </p>
        </div>
    </div>
  );
}

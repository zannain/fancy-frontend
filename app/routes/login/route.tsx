import { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import Label from "../../components/Form/Label/Label";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";

export const meta = () => {
  return [{ title: "Login" }];
};
export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  let email = String(formData.get("email") || "");
  let password = String(formData.get("password") || "");
  let errors: {[key:string]: string} = {}

  if (!email) {
    errors.email = "Email is required"
  }
  if (!password) {
    errors.password = "Password is required"
  }
  return {
    errors: Object.keys(errors).length ? errors : null
  }
}
export default function LoginRoute() {
  let actionData = useActionData<typeof action>();
  let emailError = actionData?.errors?.email;
  let passwordError = actionData?.errors?.password;
  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 sm:px-6 lg:px-8 max-w-96 mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-[319px]">
        <h1 className="text-xl mb-3">Log in to your account</h1>
        <Form className="space-y-6" method="post">
          <div className="flex flex-col">
            <Label htmlFor="email">Email { emailError && <span className="text-red-500 text-sm">{emailError}</span> }</Label>

            <Input type="email" id="email" name="email" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="password">Password { passwordError && <span className="text-red-500 text-sm">{passwordError}</span> }</Label>

            <Input type="password" id="password" name="password" />
          </div>
          <Button type="submit" className="w-full" variant="primary" size="md">
            Submit
          </Button>
        </Form>
        <div className="flex justify-center mt-1">

          <p>
            Don't have an account?{" "}
            <Link to="/sign-up">
              <Button variant="linkColor" size="sm">
                Sign up
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

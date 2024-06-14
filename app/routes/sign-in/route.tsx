import { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import Label from "../../components/Form/Label/Label";
import { Button } from "../../components/Button/Button";
import Input from "../../components/Form/Input/Input";
import Error  from "../../components/Error/Error";

export const meta = () => {
  return [{ title: "Login" }];
};
export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  let email = String(formData.get("email") || "");
  let password = String(formData.get("password") || "");
  let errors: {[key:string]: string} = {}

  if (!email || !password) {
    errors.message = "Incorrect email or password."
  }

  return {
    errors: Object.keys(errors).length ? errors : null
  }
}
export default function LoginRoute() {
  let actionData = useActionData<typeof action>();
  let errors = actionData?.errors?.message;
  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 sm:px-6 lg:px-8 max-w-96 mx-auto">
      {errors && <Error message={errors}></Error>}
      <br />
      <div className="sm:mx-auto sm:w-full sm:max-w-[319px]">
        <h1 className="text-3xl mb-3">Log in to your account</h1>
        <Form className="space-y-6" method="post">
          <div className="flex flex-col">
            <Label htmlFor="email" className="text-sm">Email</Label>

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

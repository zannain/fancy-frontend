import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
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
  return null;
}
export default function LoginRoute() {
  let actionData = useActionData<typeof action>();
  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-[319px]">
        <h1 className="text-xl">Log in to your account</h1>
        <Form className="space-y-6" method="post">
          <div className="flex flex-col">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email"  />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" />
          </div>
          <Button type="submit" className="w-full" variant="primary" size="md">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

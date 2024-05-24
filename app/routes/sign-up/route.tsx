import { Form, Link } from "@remix-run/react";
import { Button } from "../../components/Button/Button";
import Label from "../../components/Form/Label/Label";
import Input from "../../components/Form/Input/Input";

export const meta = () => {
  return [{ title: "Create Account" }];
};
export default function SignUpRoute() {
  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 sm:px-6 lg:px-8 max-w-96 mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-[319px]">
        <h1 className="text-xl mb-3">Create your account</h1>
        <Form className="space-y-6" method="post">
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
        <div className="flex flex-col justify-center mt-1">
          <ul>
            <li className="text-neutral-700">8 -64 Characters</li>
            <li className="text-neutral-700">One uppercase letter</li>
            <li className="text-neutral-700">One lowercase letter</li>
            <li className="text-neutral-700">One number</li>
            <li className="text-neutral-700">One special character (e.g. , ! @ # $ % ^ & *)</li>
          </ul>
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <Button variant="linkColor" size="sm">
                Sign In
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

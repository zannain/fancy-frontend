import { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";


export function action({request}: ActionFunctionArgs) {
    console.log(request.formData)
    return null
}
export default function LoginRoute() {
  return (
    <div className="container">
      <Form>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-neutral-700">Email</label>
          <input type="email" id="email" className="border w-96 p-2" />

          <label htmlFor="password" className="text-neutral-700">Password</label>
          <input type="password" id="password" className="border w-96 p-2" />
        </div>
      </Form>
    </div>
  );
}

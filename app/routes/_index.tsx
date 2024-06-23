import { Link } from "@remix-run/react";
import { Button } from "../components/Button/Button";
export default function RootRoute() {
  return (
    <div className="flex flex-col gap-2 mx-auto m-2 p-3">
      <h1>Components</h1>
      <Button size="md" variant="primary">
        <Link to="/products">Product Grid</Link>
      </Button>

      <Button size="md" variant="primary">
        <Link to="/sign-in">Login</Link>
      </Button>
    </div>
  );
}

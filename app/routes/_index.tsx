import { Link } from "@remix-run/react";
import { Button } from "../components/Button/Button";
export default function RootRoute() {
  return (
    <main>
        <Link to="/products">Product Grid</Link>
        <Link to="/login">Login</Link>
    </main>
  );
}

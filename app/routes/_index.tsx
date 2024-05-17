import { Link } from "@remix-run/react";
import { Button } from "../components/Button/Button";

export default function RootRoute() {
  return (
    <div className="flex mx-auto m-2 p-3">
      <Link to={"products"}>
        <Button size="md" variant={"primary"}>
          Product Grid
        </Button>
      </Link>
    </div>
  );
}

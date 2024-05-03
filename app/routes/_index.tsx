import { Link } from "@remix-run/react";

export default function RootRoute() {
  return (
    <div>
      <Link to={"products"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 border border-blue-700 rounded">
          Button
        </button>
      </Link>
    </div>
  );
}

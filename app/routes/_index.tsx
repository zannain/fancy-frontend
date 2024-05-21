import ProductList from "../components/ProductList/ProductList";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export const loader = async () => {
  const data = await fetch(
    "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest"
  );
  return json(await data.json());
};
export default function RootRoute() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <div className="flex mx-auto m-2 p-3">
      <ProductList products={data} />
    </div>
  );
}

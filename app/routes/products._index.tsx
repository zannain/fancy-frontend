import ProductList from "../components/ProductList/ProductList";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export const loader = async () => {
  const data = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest')
  return json(await data.json())

};
export default function ProductsIndex() {
  const {data} = useLoaderData<typeof loader>();
  return <ProductList products={data} />;
}

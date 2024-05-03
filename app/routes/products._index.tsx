import ProductList from "../components/ProductList/ProductList";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import products from "../data/products.json";
export const loader = async () => {
  return json({ products });
};
export default function ProductsIndex() {
    const { products } = useLoaderData<typeof loader>();
    return (
        <div>
            <ProductList products={products} />
        </div>
    )

}
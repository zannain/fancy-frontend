import ProductList from "../components/ProductList/ProductList";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import products from "../data/products.json";
import productImages from "../data/product-images.json";
import inventory from "../data/inventory.json";
import { productAPI, productImageAPI, inventoryAPI } from "../data";
export const loader = async () => {
  await inventory.forEach((item) => inventoryAPI.addToInventory(item));
  await productImages.forEach((image) =>
    productImageAPI.addProductImage(image)
  );
  await products.forEach((product) => productAPI.addProduct(product));
  const allProducts = await productAPI.getProducts();
  const allImages = await productImageAPI.getAll();
  return json({ allProducts, allImages });
};
export default function ProductsIndex() {
  const { allProducts, allImages } = useLoaderData<typeof loader>();
  return <ProductList products={allProducts} images={allImages} />;
}

import Product from "../Product/Product";
import {
  productImageAPI,
  Product as ProductModel,
  ProductImageRecords,
} from "../../data";

type ProductListProps = {
  products: ProductModel[];
  images: ProductImageRecords;
};
export default function ProductList({ products, images }: ProductListProps) {
  return (
    <>
    <h1>Latest Arrivals</h1>
      <div className="container">
        {products.map((product) => (
          <Product
            key={product.product_id}
            product={product}
            image={images[product.product_id]}
          />
        ))}
      </div>
    </>
  );
}

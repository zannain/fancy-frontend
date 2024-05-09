import Product from "../Product/Product";
import {
  Product as ProductModel,
} from "../../data";

type ProductListProps = {
  products: ProductModel[];
};
export default function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <h1 className="text-lg font-bold mb-10">Latest Arrivals</h1>
      <div className="container">
        {products.map((product) => (
          <Product
            key={product.product_id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

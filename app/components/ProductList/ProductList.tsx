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
    <div className="m-4">
    <h1 className="text-lg font-bold">Latest Arrivals</h1>
        {products.map((product) => (
          <Product
            key={product.product_id}
            product={product}
            image={images[product.product_id]}
          />
        ))}
    </div>
  );
}

import Product from "../Product/Product";
import { Product as ProductModel } from "../../data";
import { Button } from "../Button/Button";

type ProductListProps = {
  products: ProductModel[];
};
export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="max-w-full w-[375px] mx-auto flex flex-col px-4">
        <div className="flex gap-2 m-2 justify-between self-stretch">
          <h1 className="text-lg font-bold mb-10 ml-4">Latest Arrivals</h1>
          <Button size="lg" variant="secondary">
            View All
          </Button>
        </div>

        <div className="container gap-y-8">
          {products.map((product) => (
            <Product key={product.product_id} product={product} />
          ))}
        </div>
    </div>
  );
}

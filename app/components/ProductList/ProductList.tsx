import Product from "../Product/Product";
import { Product as ProductModel } from "../../data";
import { Button } from "../Button/Button";

type ProductListProps = {
  products: ProductModel[];
};
export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex flex-col mx-auto lg:max-w-[1280px] grid-cols-1 px-4">
        <div className="flex gap-2 m-2 justify-between self-stretch">
          <h1 className="text-2xl font-bold mb-10 ml-4">Latest Arrivals</h1>
          <Button size="lg" variant="secondary">
            View All
          </Button>
        </div>

        <ul className="container gap-y-8 list-none" role="list">
          {products.map((product) => (
            <Product key={product.product_id} product={product} />
          ))}
        </ul>
    </div>
  );
}

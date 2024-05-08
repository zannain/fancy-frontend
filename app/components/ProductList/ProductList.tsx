import Product from "../Product/Product";
import {
  Product as ProductModel,
  ProductImageRecords,
  InventoryRecords,
} from "../../data";

type ProductListProps = {
  products: ProductModel[];
  images: ProductImageRecords;
  inventory: InventoryRecords
};
export default function ProductList({ products, images, inventory }: ProductListProps) {
  return (
    <div>
      <h1 className="text-lg font-bold mb-10">Latest Arrivals</h1>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {products.map((product) => (
          <Product
            key={product.product_id}
            product={product}
            image={images[product.product_id]}
            inventoryItem = {inventory[product.product_id]}
          />
        ))}
      </div>
    </div>
  );
}

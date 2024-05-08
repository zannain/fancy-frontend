import { ProductImage, Product as ProductModel } from "../../data";

type ProductProps = {
  product: ProductModel;
  image: ProductImage;
};
export default function Product({ product, image }: ProductProps) {
  console.log({product})
  return (
      <div className="flex flex-col">
          <div className="flex-1">
            <img className="rounded-md w-100 object-cover aspect-square" src={image?.image_url} />
          </div>
          <div className="text-lg my-1">{product.name}</div>
      </div>
  );
}

import { ProductImage, Product as ProductModel } from "../../data";

type ProductProps = {
  product: ProductModel;
  image: ProductImage;
};
export default function Product({ product, image }: ProductProps) {
  return (
    <div className="flex gap-3">
        <div className="flex-1">
            <img className="w-full min-w-72" src={image?.image_url} />
        </div>
        <div>{product.description}</div>
    </div>
  );
}

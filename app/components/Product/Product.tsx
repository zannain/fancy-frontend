import { useState } from "react";
import ColorBubble from "../ColorBubble/ColorBubble";
import { Product as ProductModel } from "~/data";

type ProductProps = {
  product: ProductModel;
};
export default function Product({ product}: ProductProps) {

  const uniqueColors = Array.from(new Set(product.inventory.map(item => item.color)));
  const [productImage, setProductImage] = useState(product.images[0].image_url)

  const handleProductImage = (color: string) => {
    const newImage = product.images.filter(i => i.color == color)
    if (newImage.length > 0) {
      setProductImage(newImage[0].image_url)
    }
  }

  return (
      <button className="product focus:ring-2 focus:ring-offset-3 flex flex-col gap-1">
          <div>
            <img className="product-img rounded-md w-100 object-cover aspect-square" src={productImage} />
          </div>
          <div>
            <div className="product-color text-neutral-600 mt-4">{product.inventory[0].color}</div>
            <div className="product-name text-lg">{product.name}</div>
          </div>
          <div className="text-neutral-500 text-lg">${product.inventory[0].list_price}</div>
          <div className="flex gap-1">
                {uniqueColors.map(item => <ColorBubble key={item} color={item} handleProductImage={handleProductImage} />)}
          </div>
      </button>
  );
}

import { useState } from "react";
import { Inventory, ProductImage, Product as ProductModel } from "../../data";
import ColorBubble from "../ColorBubble/ColorBubble";

type ProductProps = {
  product: ProductModel;
  image: ProductImage[];
  inventoryItem: Inventory[]
};
export default function Product({ product, image, inventoryItem}: ProductProps) {
  const uniqueColors = Array.from(new Set(inventoryItem.map(item => item.color)));
  const [productImage, setProductImage] = useState(image[0].image_url)
  const handleProductImage = (color: string) => {
    const newImage = image.filter(i => i.product_id == product.product_id && i.color == color)
    if (newImage.length > 0) {
      console.log(newImage[0].image_url)
      setProductImage(newImage[0].image_url)
    }
  }
  return (
      <div className="flex flex-col gap-1">
          <div>
            <img className="rounded-md w-100 object-cover aspect-square" src={productImage} />
          </div>
          <div>
            <div className="color text-neutral-600 mt-4">{inventoryItem[0].color}</div>
            <div className="text-lg">{product.name}</div>
          </div>
          <div className="text-neutral-500 text-lg">${inventoryItem[0].list_price}</div>
          <div className="flex gap-1">
                {uniqueColors.map(item => <ColorBubble key={item} color={item} handleProductImage={handleProductImage} />)}
          </div>
      </div>
  );
}

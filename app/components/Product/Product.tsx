import { useState } from "react";
import ColorBubble from "../ColorBubble/ColorBubble";
import { Product as ProductModel } from "~/data";

type ProductProps = {
  product: ProductModel;
};
export default function Product({ product }: ProductProps) {
  const uniqueColors = Array.from(
    new Set(product.images.map((item) => item.color))
  );
  const [productImage, setProductImage] = useState(product.images[0].image_url);
  const [selectedInventory, setSelectedInventory] = useState(
    product.inventory[0]
  );
  const updateInventory = (color: string) => {
    const newImage = product.images.filter(i => i.color == color)
    if (newImage?.length > 0) {
      setProductImage(newImage[0].image_url)
    }
  };
  const displayPrice = () => {
    if (selectedInventory.list_price == selectedInventory.sale_price) {
      return (
        <div className="product-price text-neutral-500 text-lg">
          ${selectedInventory.list_price}
        </div>
      );
    } else {
      return (
        <div className="flex gap-3">
          <div className="product-price text-neutral-500 text-lg">
            ${selectedInventory.sale_price}
          </div>
          <div className="product-price text-neutral-500 text-lg">
            <s>${selectedInventory.list_price}</s>
          </div>
        </div>
      );
    }
  };

  return (
    <li className="product">
      <figure tabIndex={0} className="focus:ring-indigo-200 focus:ring-offset-indigo-200 pb-2">
        <img
          className="product-img block h-auto w-full rounded-md object-cover aspect-square"
          src={productImage}
        />
        <figcaption>
          <div className="product-color text-neutral-600 mt-4 ml-1 capitalize">
            {product.inventory[0].color}
          </div>
          <div className="product-name text-lg mt-1 ml-1">{product.name}</div>
          <div className="product-price text-neutral-500 text-lg mt-2 ml-1">
            {displayPrice()}
          </div>
          <div className="flex gap-1 ml-1 mt-2">
            {uniqueColors.map((item) => (
              <ColorBubble
                key={item}
                color={item}
                inventory={selectedInventory}
                handleInventoryUpdate={updateInventory}
              />
            ))}
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

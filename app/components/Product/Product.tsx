import { useState } from "react";
import ColorBubble from "../ColorBubble/ColorBubble";
import { Product as ProductModel } from "~/data";

type ProductProps = {
  product: ProductModel;
};
export default function Product({ product}: ProductProps) {
  const uniqueColors = Array.from(new Set(product.inventory.map(item => item.color)));
  const [productImage, setProductImage] = useState(product.images[0].image_url)
  const [currentProduct, setCurrentProduct] = useState(product)
  const [selectedInventory, setSelectedInventory] = useState(product.inventory[0])
  console.log(product.inventory[0].sale_price, product.inventory[0].list_price)
  const handleProductImage = (color: string) => {
    // const newImage = product.images.filter(i => i.color == color)
    // if (newImage?.length > 0) {
    //   setProductImage(newImage[0].image_url)
    // }
  }
  const displayPrice = () => {
    if (selectedInventory.list_price == selectedInventory.sale_price) {
      return (
        <div className="product-price text-neutral-500 text-lg">${selectedInventory.list_price}</div>
      )
    } else {
        return (
          <div className="flex gap-3">
            <div className="product-price text-neutral-500 text-lg">${selectedInventory.sale_price}</div>
            <div className="product-price text-neutral-500 text-lg"><s>${selectedInventory.list_price}</s></div>
          </div>
        )
    }
  }

  return (
      <div className="product focus:ring-2 focus:ring-offset-3 flex flex-col gap-1">
          <div>
            <img className="product-img h-[300px] w-[319px] md:w-[336px] lg:h-[319px] rounded-md object-cover aspect-square" src={productImage} />
          </div>
          <div className="product-color text-neutral-600">{product.inventory[0].color}</div>
          <div className="product-name text-lg">{product.name}</div>
          <div className="product-price text-neutral-500 text-lg">{displayPrice()}</div>
          <div className="flex gap-1">
                {uniqueColors.map(item => <ColorBubble key={item} color={item} handleProductImage={handleProductImage} />)}
          </div>
      </div>
  );
}

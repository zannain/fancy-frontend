import { useState } from "react";
import ColorBubble from "../ColorBubble/ColorBubble";
import { ProductImage, Product as ProductModel } from "~/data";

type ProductProps = {
  product: ProductModel;
};

export default function Product({ product }: ProductProps) {
  const colors = product.colors;
  const images = colors.reduce((acc: ProductImage[], item) => {
    let img = product.images.find((img) => img.color === item);
    acc.push(img!);
    return acc;
  }, []);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const image = images.find((item) => item.color === currentColor)?.image_url;

  const inventory = product.inventory.find(
    (item) => item.color === currentColor
  );
  const hasDiscount =
    inventory?.discount_percentage || inventory?.discount ? true : false;

  const handleColorChange = (clr: string) => {
    setCurrentColor(clr);
  };
  const displayPrice = () => {
    if (!hasDiscount) {
      return (
        <div className="product-price text-neutral-500 text-lg">
          ${inventory?.list_price}
        </div>
      );
    } else {
      return (
        <div className="flex gap-3">
          <div className="product-price text-neutral-500 text-lg">
            ${inventory?.sale_price}
          </div>
          <div className="product-price text-neutral-500 text-lg">
            <s>${inventory?.list_price}</s>
          </div>
        </div>
      );
    }
  };

  return (
    <li className="product">
      <figure
        tabIndex={0}
        className="focus:ring-indigo-200 focus:ring-offset-indigo-200 hover:ring-indigo-200 hover:ring pb-2"
      >
        <img
          className="product-img block h-auto w-full rounded-md object-cover aspect-square"
          src={image}
        />
        <figcaption>
          <div className="product-color text-neutral-600 mt-4 ml-1 capitalize">
            {currentColor}
          </div>
          <div className="product-name text-lg mt-1 ml-1">{product.name}</div>
          <div className="product-price text-neutral-500 text-lg mt-2 ml-1">
            {displayPrice()}
          </div>
          <div className="flex gap-1 ml-1 mt-2">
            {colors.map((item, i) => (
              <button

                key={i}
                onClick={() => handleColorChange(item)}
                onMouseEnter={() => handleColorChange(item)}
                onFocus={() => handleColorChange(item)}
                className="circle focus:ring-indigo-200 focus:ring-offset-indigo-200"
                style={{ backgroundColor: item }}
              ></button>
            ))}
          </div>
        </figcaption>
      </figure>
    </li>
  );
}

import { ProductImage, Product as ProductModel } from "../../data"

type ProductProps = {
    product: ProductModel,
    image: ProductImage
}
export default function Product({product, image}: ProductProps) {
    return (
        <>
            <div>
                <img className="object-cover" src={image?.image_url} />
            </div>
            <div>
                {product.description}
            </div>
            <div>
                {product.category}
            </div>
        </>
    )
}
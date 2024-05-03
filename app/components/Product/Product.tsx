export default function Product({product}) {
    console.log(product)
    return (
        <div>
            {product.product_id}
            {product.category}
            {product.collection}
            {product.created_at}
            {product.description}
            {product.name}
        </div>
    )
}
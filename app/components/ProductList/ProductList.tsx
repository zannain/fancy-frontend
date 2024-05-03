import Product from "../Product/Product";

export default function ProductList({products}) {
  return (<div>
    <h1 className="text-3xl font-bold">Latest Arrivals</h1>
    {products.map(product => <Product key={product.product_id} product={product} />)}
  </div>);
}

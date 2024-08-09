import ProductCard from "./ProductCard";
import { ProductProp } from "./ProductCard";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

async function Products() {
  const products = await fetchProducts();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {products?.map((product: ProductProp, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default Products;

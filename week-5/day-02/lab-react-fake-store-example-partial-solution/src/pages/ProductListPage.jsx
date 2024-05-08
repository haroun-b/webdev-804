import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {/* {products.map((product) => {
        return (
          <Link
            className="product-card"
            key={product.id}
            to={`/product/details/${product.id}`}
          >
            <img
              src={product.image}
              alt=""
            />
            <h2>{product.title}</h2>
          </Link>
        );
      })} */}

      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
}

export default ProductListPage;

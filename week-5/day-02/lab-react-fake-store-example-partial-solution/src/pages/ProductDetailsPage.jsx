import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, [productId]);
  console.log(product);

  // To fetch the product details, set up an effect with the `useEffect` hook:

  return (
    <div className="ProductDetailsPage">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt=""
      />
      <p>{product.description}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default ProductDetailsPage;

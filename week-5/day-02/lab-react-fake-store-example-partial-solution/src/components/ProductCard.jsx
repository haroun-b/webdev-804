import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      className="product-card"
      to={`/product/details/${product.id}`}
    >
      <img
        src={product.image}
        alt=""
      />
      <h2>{product.title}</h2>
    </Link>
  );
}

export default ProductCard;

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  return (

    <div className="border p-3 rounded">

      <img
        src={product.thumbnail}
        className="h-40 mx-auto"
      />

      <h2>{product.title}</h2>
      <p>${product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="text-blue-500"
      >
        View Detail
      </Link>

    </div>

  );

};

export default ProductCard;

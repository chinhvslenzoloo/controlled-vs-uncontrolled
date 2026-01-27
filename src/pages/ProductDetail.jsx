import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axiosClient from "../api/axiosClient";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {

    // Single product fetch
    axiosClient.get(`/products/${id}`)
      .then(res => setProduct(res.data));

  }, []);

  if (!product) return "Loading...";

  return (

    <div className="p-6">

      <img src={product.thumbnail} className="w-64" />

      <h1 className="text-xl">{product.title}</h1>
      <p>${product.price}</p>

      <button

        onClick={() => dispatch(addToCart(product))}

        className="bg-black text-white px-4 py-2 mt-3"
      >
        Add To Cart
      </button>

    </div>

  );

};

export default ProductDetail;

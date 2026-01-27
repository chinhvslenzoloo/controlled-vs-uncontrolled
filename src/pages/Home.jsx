import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";

const Home = () => {

  const dispatch = useDispatch();

  // Redux state авах
  const { items, loading } = useSelector(
    state => state.products
  );

  useEffect(() => {

    // API call trigger
    dispatch(fetchProducts());

  }, []);

  if (loading) return <p>Loading...</p>;

  return (

    <div className="grid grid-cols-4 gap-4 p-4">

      {items.map(product => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>

  );

};

export default Home;

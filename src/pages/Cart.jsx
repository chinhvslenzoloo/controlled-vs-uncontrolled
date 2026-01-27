import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {

  const cartItems = useSelector(
    state => state.cart.items
  );

  const dispatch = useDispatch();

  return (

    <div className="p-4">

      {cartItems.map(item => (

        <div
          key={item.id}
          className="flex justify-between border-b py-2"
        >

          <p>{item.title}</p>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>

        </div>

      ))}

    </div>

  );

};

export default Cart;

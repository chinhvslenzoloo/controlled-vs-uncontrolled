import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <div className="flex justify-between p-4 shadow">

      <Link to="/" className="font-bold">
        DummyShop
      </Link>

      <Link to="/cart">
        Cart
      </Link>

    </div>

  );

};

export default Navbar;

import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems.length);

  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col">
        <img src={CDN_URL + "2xempty_cart_yfxml0"} className="w-64 h-60"></img>
        <h1 className="font-bold text-lg">Your cart is empty!</h1>
        <h5>You can go to home page to view more restaurants</h5>
        <Link to="/">
          <div className="bg-orange-500 text-white font-extrabold mt-8 py-[11px] px-[20px] cursor-pointer text-lg">
            SEE RESTAURANTS NEAR YOU
          </div>
        </Link>
      </div>
    );
  }

  return <h1>To be continued...</h1>;
};

export default Cart;

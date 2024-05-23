import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign In");
  let [darkMode, setDarkMode] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  console.log({ loggedInUser });
  // let btnName = "Login";

  //subscribing to the store using a selector (useSelector)
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  // onlineStatus ? (statusOnline = "green") : (statusOnline = "red");

  // console.log("header render");

  useEffect(() => {
    // console.log("use effect called");
  }, [btnName]);

  return (
    <div className="head mb-20 ">
      {" "}
      <div className="flex justify-between mx-[7rem] pr-2 align-center header shadow-md">
        <div className=" max-w-28	max-h-28 logo-container">
          <Link to="/">
            <img className="w-full h-full logo" src={LOGO_URL}></img>
          </Link>
        </div>
        <div className=" relative top-[28px] pr-2 navItems">
          <ul className="flex text-2xl items-center 	">
            <li className="px-3 cursor-pointer flex items-center gap-3 justify-center checkStatus">
              Online Status
              <div
                className={
                  onlineStatus
                    ? (statusOnline = "green")
                    : (statusOnline = "red")
                }
              ></div>
            </li>
            <li className="px-3 cursor-pointer	">
              <Link className="header-items" to="/about">
                About Us
              </Link>
            </li>
            <li className="px-3 cursor-pointer	">
              <Link className="header-items" to="/checkout">
                Cart ({cartItems.length} items)
              </Link>
            </li>
            <li className="px-3 cursor-pointer	">
              <Link className="header-items" to="/support">
                Help
              </Link>
            </li>
            <li className="px-3 cursor-pointer	">
              <Link className="header-items" to="/offers-near-me">
                Offers
              </Link>
            </li>
            <li className="px-3 cursor-pointer	">
              <Link className="header-items" to="/my-account">
                My Account
              </Link>
            </li>
            <li className="px-3 cursor-pointer	">
              <Link className="header-items" to="/grocery">
                Grocery
              </Link>
            </li>

            <button
              className=" px-3 cursor-pointer	login"
              onClick={() => {
                btnName === "Sign Out"
                  ? setBtnName("Sign In")
                  : setBtnName("Sign Out");
                // console.log(btnName);
              }}
            >
              {btnName}
            </button>
            <li className="px-3 cursor-pointer font-bold">{loggedInUser}</li>
            <button
              className="px-3 cursor-pointer"
              onClick={() => {
                setDarkMode(!darkMode);

                // console.log("darkMode::" + darkMode);
              }}
            >
              <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

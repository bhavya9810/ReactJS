import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // let btnName = "Login";

  console.log("header render");

  useEffect(() => {
    console.log("use effect called");
  }, [btnName]);

  return (
    <div className="head">
      {" "}
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={LOGO_URL}></img>
          </Link>
        </div>
        <div className="navItems">
          <ul>
            <li>
              <Link className="header-items" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="header-items" to="/checkout">
                Cart
              </Link>
            </li>
            <li>
              <Link className="header-items" to="/support">
                Help
              </Link>
            </li>
            <li>
              <Link className="header-items" to="/offers-near-me">
                Offers
              </Link>
            </li>
            <li>
              <Link className="header-items" to="/my-account">
                My Account
              </Link>
            </li>

            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
                console.log(btnName);
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

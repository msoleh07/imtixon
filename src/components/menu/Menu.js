import React from "react";
import "./Menu.css";
import { HiOutlineHeart } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Menu = () => {
  let location = useLocation();
  let cartCount = useSelector((s) => s.addToCart);

  return (
    <div className="menu_page">
      <ul>
        <li>
          <Link>
            <IoHomeOutline
              className={location.pathname === "/" ? "active" : ""}
            />
          </Link>
        </li>
        <li>
          <Link className={cartCount.length ? "length_links" : ""} to="/cart">
            <div
              style={{ display: cartCount.length ? "flex" : "none" }}
              className={cartCount.length ? "length_cart" : ""}
            >
              {cartCount.length}
            </div>
            <FiShoppingCart
              className={location.pathname === "/cart" ? "active" : ""}
            />
          </Link>
        </li>
        <li>
          <Link to="/heart">
            <HiOutlineHeart
              className={location.pathname === "/heart" ? "active" : ""}
            />
          </Link>
        </li>
        <li>
          <Link to="/register">
            <CiLogin
              className={location.pathname === "/register" ? "active" : ""}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

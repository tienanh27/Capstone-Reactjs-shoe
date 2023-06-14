import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import iconSearch from "../assets/icon-search.png";
import iconCart from "../assets/icon-cart.png";

const menus = [
  { name: "Home", href: "#" },
  { name: "Men", href: "#" },
  { name: "Woman", href: "#" },
  { name: "Kid", href: "#" },
  { name: "Sport", href: "#" },
];

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const carts = useSelector((state) => state.auth.carts);

  console.log("user :>> ", user);
  console.log("carts :>> ", carts);
  return (
    <header>
      <div className="header__top">
        <div className="d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="header__top--logo" alt="" />
          </Link>

          <div className="d-flex text-white align-items-center gap-3">
            <button className="d-flex header__top--search align-items-center">
              <img src={iconSearch} alt="" />
              <span className="ms-1">Search</span>
            </button>
            <Link
              to="/cart"
              className="d-flex header__top--cart align-items-center text-decoration-none"
            >
              <img src={iconCart} alt="" />
              <span>({carts?.length})</span>
            </Link>
            {!user && (
              <Link to="/login" className="header__top--button">
                Login
              </Link>
            )}
            {!user && (
              <Link to="/register" className="header__top--button">
                Register
              </Link>
            )}
            {user && (
              <Link to="/info" className="text-decoration-none text-white">
                Hello, {user?.name}
              </Link>
            )}
          </div>
        </div>
      </div>
      <nav className="header__navbar d-flex gap-4">
        {menus.map((menu) => {
          const isActive = menu.name === "Home";
          return (
            <a
              key={menu.name}
              className={`header__navbar--link ${
                isActive && "header__navbar--link-active"
              }`}
              href={menu.href}
            >
              {menu.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

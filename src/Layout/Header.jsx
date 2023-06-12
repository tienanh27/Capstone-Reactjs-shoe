import React from "react";
import { Link } from "react-router-dom";

const menus = [
  { name: "Home", href: "#" },
  { name: "Men", href: "#" },
  { name: "Woman", href: "#" },
  { name: "Kid", href: "#" },
  { name: "Sport", href: "#" },
];

// ❤️♡

const Header = () => {
  return (
    <header>
      <div className="header__top">
        <div className="d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <img src="./images/logo.png" className="header__top--logo" alt="" />
          </a>

          <div className="d-flex text-white align-items-center gap-3">
            <button className="d-flex header__top--search align-items-center">
              <img src="./images/icon-search.png" alt="" />
              <span className="ms-1">Search</span>
            </button>
            <button className="d-flex header__top--cart align-items-center">
              <img src="./images/icon-cart.png" alt="" />
              <span>(1)</span>
            </button>
            <Link to="/login" className="header__top--button">Login</Link>
            <Link to="/register" className="header__top--button">Register</Link>
          </div>
        </div>
      </div>
      <nav className="header__navbar d-flex gap-4">
        {menus.map((menu) => {
          const isActive = menu.name === "Home";
          return (
            <a key={menu.name} className={`header__navbar--link ${isActive && "header__navbar--link-active"}`} href={menu.href}>
              {menu.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

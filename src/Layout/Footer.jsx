import React from "react";
import { Link } from "react-router-dom";

const menus = [
  {
    title: "Get Help",
    subTitles: [
      { name: "Home", link: "#" },
      { name: "Nike", link: "#" },
      { name: "Adidas", link: "#" },
      { name: "Contact", link: "#" },
    ],
  },
  {
    title: "Support",
    subTitles: [
      { name: "About", link: "#" },
      { name: "Contact", link: "#" },
      { name: "Help", link: "#" },
      { name: "Phone", link: "#" },
    ],
  },
  {
    title: "Register",
    subTitles: [
      { name: "Register", link: "/register" },
      { name: "Login", link: "/login" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="py-5">
      <ul className="nav container mx-auto row row-cols-3 g-5">
        {menus?.map((item) => (
          <li key={item?.title} className="col text-start footer__col">
            <h6 className="footer__col--title">{item?.title}</h6>
            <ul className="nav d-flex flex-column">
              {item?.subTitles?.map((sub) => (
                <li key={sub.name}>
                  <Link className="footer__col--subtitle" to={sub?.link}>
                    {sub?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

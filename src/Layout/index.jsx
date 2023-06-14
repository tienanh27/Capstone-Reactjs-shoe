import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.css";
const Layout = ({ children, disableFooter = false }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      {!disableFooter && <Footer />}
    </>
  );
};

export default Layout;

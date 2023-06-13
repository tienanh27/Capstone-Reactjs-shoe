import React from "react";
import Layout from "../Layout";
import Carousel from "./Carousel";
import ProductFeature from "./ProductFeature";
import "./home.css";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <ProductFeature />
    </Layout>
  );
};

export default Home;

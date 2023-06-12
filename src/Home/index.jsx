import React from "react";
import Layout from "../Layout";
import Carousel from "./Carousel";
import "./home.css";
import ProductFeature from "./ProductFeature";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <ProductFeature />
    </Layout>
  );
};

export default Home;

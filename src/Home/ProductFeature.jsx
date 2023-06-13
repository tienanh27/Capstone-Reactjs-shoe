import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductList/ProductCard";
import userApi from "../services/userApi";
import { setFetching } from "../store/productSlice";
import ProductList from "../ProductList";

const ProductFeature = () => {
  const products = useSelector((state) => state.products.productFeatures);
  const fetching = useSelector((state) => state.products.fetching);

  // console.log("productFavorites :>> ", productFavorites);
  if (fetching) return <div className="h-25">Loading...</div>;

  return (
    <section className="section-top product-feature">
      <h3 className="heading-gradient product-feature__heading">
        Product Feature
      </h3>
      <ProductList products={products} />
    </section>
  );
};

export default ProductFeature;

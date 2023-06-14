import React from "react";
import { useSelector } from "react-redux";
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

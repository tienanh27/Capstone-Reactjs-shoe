import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductFeature = () => {
  const products = useSelector((state) => state.products.productFeatures);
  const fetching = useSelector((state) => state.products.fetching);

  if (fetching) return <div className="h-25">Loading...</div>;

  return (
    <section className="section-top product-feature">
      <h3 className="heading-gradient product-feature__heading">
        Product Feature
      </h3>
      <ul className="nav container mx-auto row row-cols-lg-3 row-cols-2 g-5 mt-3">
        {products?.map((item) => (
          <li key={item?.id} className="col">
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductFeature;

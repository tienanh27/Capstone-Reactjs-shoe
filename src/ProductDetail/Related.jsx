import React from "react";
import ProductList from "../ProductList";

const ProductRelated = ({ products }) => {
  return (
    <div className="product-related">
      <h4 className="product-related__title">-Realate Product -</h4>
      <ProductList products={products} />
    </div>
  );
};

export default ProductRelated;

import React, { useEffect, useState } from "react";
import Layout from "../Layout";
// import Carousel from "./Carousel";
// import ProductFeature from "./ProductFeature";
import ProductInfo from "./Info";
import ProductRelated from "./Related";
import { useParams } from "react-router-dom";
import productApi from "../services/productApi";
import "./product-detail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const [productInfo, setProductInfo] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const res = await productApi.getProductById(id);
        setProductInfo(res?.content);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (!id) return;
    getProducts();
  }, [id]);

  return (
    <Layout>
      {Loading ? (
        "Loading..."
      ) : (
        <>
          <ProductInfo product={productInfo} />
          <ProductRelated products={productInfo?.relatedProducts} />
        </>
      )}
    </Layout>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import userApi from "../services/userApi";
import { setFetching } from "../store/productSlice";

const ProductFeature = () => {
  const products = useSelector((state) => state.products.productFeatures);
  const fetching = useSelector((state) => state.products.fetching);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const [productFavorites, setProductFavorites] = useState([]);
  useEffect(() => {
    const getProductFavorites = async () => {
      try {
        // dispatch(setFetching(true));
        const res = await userApi.getProductFavorites();
        console.log("res?.content :>> ", res?.content);
        // dispatch(updateProductFeatures(res?.content));
        setProductFavorites(res?.content?.productsFavorite);
      } catch (error) {
        console.log(error);
      } finally {
        // dispatch(setFetching(false));
      }
    };

    if (!user) return;
    getProductFavorites();
  }, [dispatch, user]);

  // console.log("productFavorites :>> ", productFavorites);
  if (fetching) return <div className="h-25">Loading...</div>;

  return (
    <section className="section-top product-feature">
      <h3 className="heading-gradient product-feature__heading">
        Product Feature
      </h3>
      <ul className="nav container mx-auto row row-cols-lg-3 row-cols-2 g-5 mt-3">
        {products?.map((item) => (
          <li key={item?.id} className="col">
            <ProductCard
              item={item}
              isFavorites={
                productFavorites?.findIndex((pro) => pro?.id === item?.id) >= 0
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductFeature;

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import userApi from "../services/userApi";
import "./product.css";

const ProductList = ({ products }) => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const [productFavorites, setProductFavorites] = useState([]);
  useEffect(() => {
    const getProductFavorites = async () => {
      try {
        // dispatch(setFetching(true));
        const res = await userApi.getProductFavorites();
        // console.log("res?.content :>> ", res?.content);
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

  return (
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
  );
};

export default ProductList;

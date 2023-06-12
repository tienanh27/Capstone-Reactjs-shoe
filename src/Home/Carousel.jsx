import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productApi from "../services/productApi";
import { setFetching, updateProductFeatures } from "../store/productSlice";

const Carousel = () => {
  const products = useSelector((state) => state.products.productFeatures);
  const fetching = useSelector((state) => state.products.fetching);

  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(setFetching(true));
        const res = await productApi.getAll();
        dispatch(updateProductFeatures(res?.content));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setFetching(false));
      }
    };
    getProducts();
  }, [dispatch]);

  const mainProducts = products?.slice(0, 5);

  if (fetching) return <div className="h-25">Loading...</div>;

  return (
    <div
      id="myCarousel"
      className="carousel slide mt-5 pb-2"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {mainProducts?.map((item, index) => (
          <button
            key={item?.id}
            type="button"
            className={index === 0 ? "active" : ""}
            data-bs-target="#myCarousel"
            data-bs-slide-to={index.toString()}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {mainProducts?.map((item, index) => (
          <div
            key={item?.id}
            className={`carousel-item ${index === 0 && "active"}`}
          >
            <div className="container d-flex justify-content-between align-items-center">
              <div className="carousel__image">
                <img src={item?.image} alt={item?.name} />
              </div>
              <div className="carousel__caption text-start">
                <h2>{item?.name}</h2>
                <p>{item?.shortDescription}</p>
                <p>
                  <Link
                    to={"/product/" + item?.id}
                    className="carousel__btn-buy"
                    href="#"
                  >
                    Buy now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <img
          src="./images/icon-next.png"
          alt=""
          className="carousel__icon carousel__icon--prev"
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <img className="carousel__icon" src="./images/icon-next.png" alt="" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../services/productApi";

const Carousel = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await productApi.getAll();
        console.log(res.content);
        setProducts(res.content);
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        {products?.slice(0, 4)?.map((item, index) => (
          <div
            key={item?.id}
            className={`carousel-item ${index === 0 && "active"}`}
          >
            <div className="d-flex carousel__container justify-content-between align-items-center">
              <div className="carousel__image">
                <img src={item?.image} alt={item?.name}   />
              </div>
              <div className="carousel__caption text-start">
                <h1>{item?.name}</h1>
                <p>{item?.shortDescription}</p>
                <p>
                  <Link to={"/product/"+item?.alias} className="carousel__btn-buy" href="#">
                    Buy now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#fff" />
          </svg>

          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p>
                <a className="" href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#fff" />
          </svg>

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
              <p>
                <a className="" href="#">
                  Browse gallery
                </a>
              </p>
            </div>
          </div>
        </div> */}
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
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
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

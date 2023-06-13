import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item, isFavorites }) => {
  return (
    <Link to={"/product/" + item?.id} className="product__card">
      <div className="px-3 py-2 position-relative">
        {!isFavorites ? (
          <div className="product__card--unlike">♡</div>
        ) : (
          <div className="product__card--like">❤️</div>
        )}
        <img
          src={item?.image}
          alt={item?.name}
          className="product__card--image"
        />
        <h6 className="product__card--title" title={item?.name}>
          {item?.name}
        </h6>
        <p className="product__card--desc">{item?.shortDescription}</p>
      </div>
      <div className="d-flex">
        <div className="product__card--btn">Buy now</div>
        <div className="product__card--price flex-fill">{item?.price} $</div>
      </div>
    </Link>
  );
};

export default ProductCard;

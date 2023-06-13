import React, { useState } from "react";

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.size?.[0]);
  return (
    <section className="d-flex container mx-auto px-4 product-detail">
      <div className="product-detail__image">
        <img src={product?.image} alt={product.name} />
      </div>
      <div className="product-detail__info">
        <h4 className="product-detail__name">{product.name}</h4>
        <p className="product-detail__desc">{product.description}</p>
        <div className="product-detail__available--txt">Available size</div>
        <ul className=" nav d-flex gap-4 mt-3">
          {product?.size?.map((size) => (
            <li
              key={size}
              className={`product-detail__sizes--item ${
                size === selectedSize && "active"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </li>
          ))}
        </ul>
        <div className="product-detail__price">{product?.price} $</div>
        <div className="product-detail__quantity">
          <button
            className="product-detail__quantity--btn"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
          <span className="product-detail__quantity--value">{quantity}</span>
          <button
            className="product-detail__quantity--btn"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            -
          </button>
        </div>
        <button className="product-detail__btn-add">Add to cart</button>
      </div>
    </section>
  );
};

export default ProductInfo;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeCarts,
  removeProductById,
} from "../store/authSlice";
import "./cart.css";
import userApi from "../services/userApi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.auth.user);
  const carts = useSelector((state) => state.auth.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const res = await userApi.orderProducts({
        orderDetail: carts?.map((item) => ({
          productId: item?.product?.id,
          quantity: item?.quantity,
        })),
        email: user?.email,
      });
      console.log(res.content);
      dispatch(removeCarts());
      alert("Order success");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container cart">
        <h4 className="cart__title">Cart</h4>
        <hr />
        {carts && carts?.length >= 1 ? (
          <div>
            <table>
              <thead>
                <tr className="cart__labels">
                  {/* <th scope="col">#</th> */}
                  <th scope="col">id</th>
                  <th scope="col">image</th>
                  <th scope="col">name</th>
                  <th scope="col">price</th>
                  <th scope="col">quantity</th>
                  <th scope="col">total</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {carts?.map((item) => (
                  <tr key={item?.product?.id} className="cart__item">
                    {/* <th scope="row">#</th> */}
                    <td>
                      <div>{item?.product?.id}</div>
                    </td>
                    <td>
                      <div>
                        <img
                          src={item?.product?.image}
                          alt={item?.product?.name}
                          className="cart__item--image"
                        />
                      </div>
                    </td>
                    <td>
                      <div>{item?.product?.name}</div>
                    </td>
                    <td>
                      <div>{item?.product?.price}</div>
                    </td>
                    <td>
                      <div>
                        <button
                          className="cart__btn cart__btn--primary px-3"
                          onClick={() => {
                            dispatch(
                              increaseProductQuantity(item?.product?.id)
                            );
                          }}
                        >
                          +
                        </button>
                        <span className="cart__quantity">{item?.quantity}</span>
                        <button
                          className="cart__btn cart__btn--primary px-3"
                          onClick={() => {
                            dispatch(
                              decreaseProductQuantity(item?.product?.id)
                            );
                          }}
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td>
                      <div>{item?.product?.price * item?.quantity}</div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button className="cart__btn--primary cart__btn">
                          Edit
                        </button>
                        <button
                          className="cart__btn-delete cart__btn ms-3"
                          onClick={() => {
                            dispatch(removeProductById(item?.product?.id));
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-end mt-2">
              <button
                className="cart__btn-submit cart__btn"
                onClick={handleSubmit}
              >
                Submit order
              </button>
            </div>
          </div>
        ) : (
          <p className="cart__empty">Empty cart</p>
        )}
      </div>
    </Layout>
  );
};

export default Cart;

import React, { useMemo, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateCount, clearCart } from "./cartSlice";
import { useEffect } from "react";
import { getCart } from "../Cart/cartSlice";
import Button from "../Button/Button";
import useScreenSize from "../../Hooks/useScreenSize ";

const Cart = () => {
  const screenSize = useScreenSize();
  return (
    <>
      <div className={styles.loader}>
        <h1 className="fw-bold ">
        Amazon
        </h1>
      </div>
      <div className="cartPage my-3">
        <div className="container">
          <div className="row mt-2">
            <div className=" col-sm-3 col-md-12 col-lg-4 order-lg-2">
              <section
                className={`${styles.cartPage__cartDetails} bg-white p-2`}
              >
                {screenSize <= 884 && (
                  <p className="fw-bold">
                    Subtotal (5 items): 16,467.00 pounds
                  </p>
                )}
                <div className={`${styles.cartPage__cartDetailsBorder}`}>
                  <i
                    aria-hidden={true}
                    className={`fa-solid fa-circle-check text-success`}
                  ></i>{" "}
                  <span className={`text-success`}>
                    Your order qualifies for free shipping.
                  </span>{" "}
                  Select this option when checking out <a href="#">details</a>
                  <p className={`${styles.cartPage__cartDetailsVisabilityLg}`}>
                    Subtotal (5 items):
                    <span className={`fw-bold`}>16,467.00 pounds</span>
                  </p>
                </div>
                <Button
                  className={`${styles.cartPage__cartDetailsButton} rounded-5`}
                  variant="primary"
                >
                  Checkout
                </Button>
              </section>
            </div>
            {/* <div className=" col-sm-9 col-md-12 col-lg-8  order-lg-1 ">
              <section className={`${styles.cartPage__cart} bg-white p-4`}>
                {screenSize >= 885 && <h1>shoping Cart</h1>}
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id}>
                      <div className={`${styles.cart__card} py-4`}>
                        <div className={`${styles.cart__container} container`}>
                          <div className="row">
                            <div className="col-5 col-md-3  col-lg-3 d-flex justify-content-between flex-column">
                              <img src={imageOne} className="w-100" alt="" />
                              {screenSize <= 884 ? (
                                <div
                                  className={`${styles.quantityButton} bg-white`}
                                >
                                  <Button
                                    className={`${styles.cart__btnCount} `}
                                  >
                                    +
                                  </Button>
                                  {item.quantity}
                                  <Button className={styles.cart__btnCount}>
                                    {item.quantity <= 0 ? (
                                      <i className="fa-solid fa-trash-can w-50 fs-6"></i>
                                    ) : (
                                      "-"
                                    )}
                                  </Button>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="col-7 col-md-6 col-lg-6">
                              <p
                                className={`${styles.cart__description} m-0 fw-bold`}
                              >
                                {item.description}
                              </p>
                              {screenSize <= 884 ? (
                                <h5 className={`${styles.cart__price}`}>
                                  {item.price}.00 pound
                                </h5>
                              ) : (
                                ""
                              )}

                              <p
                                className={`${
                                  item.stat === "available"
                                    ? "text-success"
                                    : "text-danger"
                                }fs-6 m-0`}
                              >
                                {item.stat}
                              </p>
                              <p className="fs-6 m-0">
                                Eligible for free shipping
                              </p>
                              {screenSize >= 885 ? (
                                <div className={`${styles.quantityButton}`}>
                                  <Button
                                    className={`${styles.cart__btnCount} `}
                                  >
                                    +
                                  </Button>
                                  {item.quantity}
                                  <Button className={styles.cart__btnCount}>
                                    {item.quantity <= 0 ? (
                                      <i className="fa-solid fa-trash-can w-50 fs-6"></i>
                                    ) : (
                                      "-"
                                    )}
                                  </Button>
                                </div>
                              ) : (
                                ""
                              )}
                             
                              <a
                                className={`${styles.cart__linkes} mx-2  bg-white`}
                                href="#"
                              >
                                Delete
                              </a>
                              |
                              <a
                                className={`${styles.cart__linkes} mx-2 bg-white`}
                                href="#"
                              >
                                share
                              </a>
                            </div>
                            {screenSize >= 885 && (
                              <div
                                className={`${styles.cardPrice} col-md-3 col-lg-3`}
                              >
                                <h5>{item.price}.00 pound</h5>
                              </div>
                            )}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </section>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

// const dispatch = useDispatch();
// const { cartItems, status, error } = useSelector((state) => state.cart);
// const numOfCartItems = useSelector(state => state.cart.numOfCartItems);
// const totalPrice = useSelector(state => state.cart.totalPrice);

// useEffect(() => {
//   dispatch(getCart());
// }, [dispatch]);

// if (status === "loading") return <p>Loading cart...</p>;
// if (status === "failed") return <p>Error: {error}</p>;

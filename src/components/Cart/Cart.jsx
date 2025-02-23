import React, { useState } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateCount, clearCart } from "./cartSlice";
import { useEffect } from "react";
import { getCart } from "../Cart/cartSlice";
import imageOne from "../../assets/images/item1.jpg";
import Button from "../Button/Button";
import useScreenSize from "../../Hooks/useScreenSize ";
import CardFour from "../CardFour/CardFour";

const Cart = () => {
  const screenSize = useScreenSize();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 14",
      price: 999,
      quantity: 0,
      totalPrice: 1998,
      description:
        "The latest Apple iPhone 14 with a 6.1-inch Super Retina XDR display and A15 Bionic chip for ultra-fast performance.",
      image: "https://example.com/iphone14.jpg", // Replace with actual image URL
      stat: "available",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 899,
      quantity: 1,
      totalPrice: 899,
      description:
        "Samsung's flagship Galaxy S23 with a stunning 120Hz AMOLED display and Snapdragon 8 Gen 2 processor for peak performance.",
      image: "https://example.com/galaxys23.jpg", // Replace with actual image URL
      stat: "available",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: 349,
      quantity: 3,
      totalPrice: 1047,
      description:
        "Premium noise-canceling wireless headphones with 30-hour battery life and industry-leading sound quality.",
      image: "https://example.com/sonyheadphones.jpg", // Replace with actual image URL
      stat: "none-available",
    },
  ]);

  return (
    <>
    <CardFour className={"brands"} subTitle={"up to 60% off | styles for women"}/>
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
                {/* <div
                  className={`${styles.cartPage__cartDetailsVisability} d-none`}
                >
                  <p className="fw-bold">
                    Subtotal (5 items): 16,467.00 pounds
                  </p>
                </div> */}
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
                {/* {screenSize<=884 ?(<Button
                  className={`${styles.cartPage__cartDetailsButton} rounded-5`}
                  variant="primary"
                >
                  Checkout
                </Button>):""} */}
                <Button
                  className={`${styles.cartPage__cartDetailsButton} rounded-5`}
                  variant="primary"
                >
                  Checkout
                </Button>
              </section>
            </div>
            <div className=" col-sm-9 col-md-12 col-lg-8  order-lg-1 ">
              <section className={`${styles.cartPage__cart} bg-white p-4`}>
                {screenSize >= 885 && (
                  <h1>shoping Cart</h1>
                )}
                {/* <h1 className={`${styles.cartHeader}`}>shoping Cart</h1> */}
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
                              {/* */}
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
                              {/* <h5 className={`${styles.cart__price} d-none`}>
                                {item.price}.00 pound
                              </h5> */}
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
                              {/* <div className={`${styles.quantityButtonLg}`}>
                                <Button className={`${styles.cart__btnCount} `}>
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
                              </div> */}
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
                            {/* <div
                              className={`${styles.cardPriceLg} col-md-3 col-lg-3`}
                            >
                              <h5>{item.price}.00 pound</h5>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`${styles.languageSelector}`}>
  <i className="fa-solid fa-globe"></i>
  <select name="languages" id="languages" className="mx-5">
    <option value="arabic">🇦🇪 Arabic</option>
    <option value="english">🇬🇧 English</option>
    <option value="deutsch">🇩🇪 Deutsch</option>
    <option value="italic">🇮🇹 Italian</option>
    <option value="french">🇫🇷 French</option>
  </select>
</div> */}



{/* <div className={`${styles.languageSelector}`}>
  <i className="fa-solid fa-globe"></i>
    <select name="languages" id="languages">
      <option value="arabic">Arabic</option>
      <option value="english">English</option>
      <option value="deutsch">Deutsch</option>
      <option value="italic">Italian</option>
      <option value="french">French</option>
    </select>
  </div> */}


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

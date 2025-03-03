import React, { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { onlinePayment } from "../../Redux/cartSlice";
import { Helmet } from "react-helmet";
import Button from "./../Button/Button";

export default function CheckOut() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.cart.status);
  const [cartId, setCartId] = useState(localStorage.getItem("cartId") || null);
  const formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: async (values) => {
      const shippingAddress = {
        details: values.details,
        phone: values.phone,
        city: values.city,
      };

      if (!cartId) {
        alert("Cart ID is missing. Please add items to your cart first.");
        return;
      }

      const response = dispatch(
        onlinePayment({ cartId: cartId, shippingAddress })
      );

      if (response.payload?.status === "success") {
        window.location.href = response.payload.session.url;
      } else {
        alert(response.payload || "Payment failed, please try again.");
      }
    },
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CheckOut</title>
      </Helmet>
      <div className="container my-5">
        <div className="bg-light p-5 mx-auto">
          <h1 className="text-center">Shipping Address</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="details">Details</label>
              <input
                type="text"
                className="form-control"
                id="details"
                placeholder="Enter details"
                name="details"
                onChange={formik.handleChange}
                value={formik.values.details}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Phone"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Processing..." : "Pay Now"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

import React from "react";
import styles from "./CardFour.module.css";
import imageOne from "../../assets/images/item1.jpg";

export default function CardFour({ items, className, subTitle }) {
  return (
    <>
      <section className={`${styles.gridContainer} ${className} bg-white p-3`}>
      <h5 className="fw-bold">{subTitle}</h5>
        <div className="row row-cols-2">
          <div className="col">
            <img src={imageOne} alt="" className="w-100" />
            <p>watches</p>
          </div>
          <div className="col">
            {" "}
            <img src={imageOne} alt="" className="w-100"/>
            <p>watches</p>
          </div>
          <div className="col">
            {" "}
            <img src={imageOne} alt="" className="w-100"/>
            <p>watches</p>
          </div>
          <div className="col">
            {" "}
            <img src={imageOne} alt="" className="w-100"/>
            <p>watches</p>
          </div>
          <a href="#" className="text-success fs-6">see more</a>
        </div>
      </section>
    </>
  );
}

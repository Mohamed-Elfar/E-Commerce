import React, { useState, useEffect } from "react";
import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ecommerce.routemisr.com/api/v1/products/${id}`
        );
        const fetchedProduct = response.data.data;
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.imageCover);
        setLoading(false);
      } catch (error) {
        console.log("error fetching product", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }

  // function to render the stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={styles.container__rating__star}
          />
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className={styles.container__rating__star}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarEmpty}
            className={styles.container__rating__star}
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className={styles.container}>
      {/* GALLERY THUMBNAILS */}
      {product.images && product.images.length > 0 && (
        <div className={styles.gallery}>
          {product.images.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`${product.title} subimage ${index}`}
              className={styles.gallery__thumbnail}
              onClick={() => setSelectedImage(imgUrl)}
            />
          ))}
        </div>
      )}

      <div className={styles.container__image}>
        <img
          src={selectedImage}
          alt={product.title}
          className={styles.container__image__img}
        />
      </div>

      <div className={styles.container__description}>
        <p className={styles.container__brand}>Brand: {product.brand.name}</p>
        <h2 className={styles.container__title}>{product.title}</h2>
        {/*  render the stars */}
        <div className={styles.container__rating}>
          <span className={styles.stars}>
            {product.ratingsAverage} {renderStars(product.ratingsAverage)}
          </span>
          <span className={styles.count}>
            {product.ratingsQuantity} ratings
          </span>
          <a href="#" className={styles.searchLink}>
            Search this page
          </a>
        </div>
        <hr />

        {/* price */}

        <p className={styles.container__price}>
          <sup>SAR</sup>
          {product.price}
        </p>
        <p>All price include VAT.</p>
        <p>
          <span style={{ fontWeight: "200" }}>sign in to redeem.</span>
          <span style={{ background: "#71ED58" }}> Extra 20% </span>off with
          meem credit cards.
        </p>
        <p>Enter code MEEM20 at checkout. Discount by Amazon.</p>
        <img
          src="https://i.ibb.co/R4tp3zMj/Frame-497.png"
          alt="Frame-497"
          border="0"
        />
        <hr />

        {/* About  */}
        <p className={styles.container__description__text}>
          <span>About this item</span>
          <ul className={styles.descriptionList}>
            {product.description.split("\n").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </p>
      </div>

      {/* summary box */}

      <div className={styles.container__summary}>
        <h2 className={styles.container__price}>
          <sup>SAR</sup>
          {product.price}
        </h2>
        <p>
          SAR 96 delivery <strong>6-9 october</strong>
        </p>
        <a href="#">delivery to riyadh - Update location</a>
        <p className={styles.delivery}>Usually ships within 4 to 5 days</p>
        <select name="quantity" id="quantity" className="quantity">
          <option value="1">Quantity:1</option>
          <option value="2">Quantity:2</option>
          <option value="3">Quantity:3</option>
          <option value="4">Quantity:4</option>
          <option value="5">Quantity:5</option>
        </select>{" "}
        <br />
        <button className={styles.summary__add}>Add to Cart</button> <br />
        <button className={styles.summary__buy}>Buy Now</button>
        <p className="summary__seller-info">
          Ships from <strong className={styles.seller}>Monatik LLC</strong>{" "}
          <br />
          Sold by <strong className={styles.seller}>Monatik LLC</strong> <br />
          Payment{" "}
          <a className={styles.seller} href="#secure-transaction">
            Secure transaction
          </a>
        </p>
        <button className={styles.addtolist}>Add to List</button>
      </div>
    </div>
  );
}

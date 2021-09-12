import React from "react";
import classes from "./Product.module.css";

const Product = ({ productName, price, imageUrl, currency }) => {
  let formattedCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(price);

  return (
    <div className={classes.Product}>
      <div className={classes.ImageContainer}>
        <img alt="Product" src={imageUrl} />
      </div>
      <p className={classes.ProductName}>{productName}</p>
      <p className={classes.ProductPrice}>{formattedCurrency}</p>
    </div>
  );
};

export default Product;
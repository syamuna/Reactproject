import React from "react";
import classes from "./Products.module.css";
import Product from "./Product";

const Products = ({ list }) => {
  let products = [];
  if (list.length !== 0) {
    products = list.map((product) => (
      <Product
        key={product.id}
        productName={product.productName}
        brand={product.brand}
        price={product.price}
        imageUrl={product.imageUrl}
        currency={product.priceCurrency}
      />
    ));
  } else {
    return (
      <div className={classes.NoProductList}>
        <h1>No products found!</h1>
      </div>
    );
  }
  return  <div className={classes.ProductList}>{products}</div>;
};

export default Products;
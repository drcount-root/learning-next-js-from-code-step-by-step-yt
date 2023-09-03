"use client";
import React from "react";

const Product = ({ price }) => {
  return (
    <div>
      <button onClick={() => alert(price)}>Check Price</button>
    </div>
  );
};

export default Product;

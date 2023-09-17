"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const EditProduct = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const getProductDetails = async () => {
    let productData = await fetch(
      `http://localhost:3000/api/products/${props.params.editProduct}`
    );
    productData = await productData.json();
    console.log(productData);

    if (productData.success) {
      let result = productData.result;
      setName(result.name);
      setPrice(result.price);
      setColor(result.color);
      setCompany(result.company);
      setCategory(result.category);
    }
  };

  useEffect(() => {
    console.log(props);
    getProductDetails();
  }, []);

  const updateProduct = async () => {
    let data = fetch(
      "http://localhost:3000/api/products/" + props.params.editProduct,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, color, company, category }),
      }
    );
    data = await data.json();
    if (data.success) {
      alert("Product Has Been Updated Successfully");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "30%",
        margin: "150px auto",
      }}
    >
      <h1>Edit Product</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter product name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={price}
        placeholder="Enter product price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        value={color}
        placeholder="Enter product color..."
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        value={company}
        placeholder="Enter product company..."
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        value={category}
        placeholder="Enter product category..."
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={updateProduct}>Update Product</button>
      <Link href={"/products"}>Go To All Products</Link>
    </div>
  );
};

export default EditProduct;

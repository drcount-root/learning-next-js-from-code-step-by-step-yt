"use client";

import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async () => {
    console.log({ name, price, color, company, category });
    const result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify({ name, price, color, company, category }),
    });

    const data = await result.json();
    if (data.success) {
      alert("New Product added");
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
      <h1>Add Product</h1>
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

      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default AddProduct;

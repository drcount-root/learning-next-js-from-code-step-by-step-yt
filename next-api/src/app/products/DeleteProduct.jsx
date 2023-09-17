"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DeleteProduct = ({ id }) => {
  const deleteHandler = async () => {
    let response = await fetch("http://localhost:3000/api/products/" + id, {
      method: "DELETE",
    });
    response = await response.json();
    console.log(response);
    if (response.success) {
      alert("product deleted successfully");
    }
  };

  return (
    <div>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default DeleteProduct;

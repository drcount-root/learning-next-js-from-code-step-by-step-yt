// CSR Example

"use client";

import { useState, useEffect, useRef } from "react";

const ProductList = () => {
  const [products, setProduucts] = useState([]);
  const [loading, setLoading] = useState(true);

  let rendered = useRef(false);

  const fetchApiData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setProduucts((prev) => [...prev, data.products]);
    setLoading(false);
  };

  useEffect(() => {
    if (!rendered.current) {
      fetchApiData();
    }

    return () => {
      rendered.current = true;
    };
  }, []);

  return (
    <>{loading ? <p>Loading...</p> : <div>{JSON.stringify(products)}</div>}</>
  );
};

export default ProductList;

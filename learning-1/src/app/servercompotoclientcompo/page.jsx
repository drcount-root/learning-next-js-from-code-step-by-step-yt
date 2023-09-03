// SSG - Static Site Generation

import React from "react";
import Product from "./product";

const dataFetch = async () => {
  const response = await fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
  );
  const data = response.json();
  console.log(data.products);
  return data;
};

const SSGExample = async () => {
  const showableData = await dataFetch();
  console.log(showableData.products);
  return (
    <div>
      <h2>SSG : API DATA</h2>
      {showableData.products.map((i) => (
        <div key={i.id}>
          <p>{i.title}</p>
          <Product price={i.price} />
        </div>
      ))}
    </div>
  );
};

export default SSGExample;

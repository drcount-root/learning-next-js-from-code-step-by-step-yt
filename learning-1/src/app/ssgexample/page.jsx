// SSG - Static Site Generation

import React from "react";

const dataFetch = async () => {
  const response = await fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
  );
  const data = response.json();
  return data;
};

const SSRExample = async () => {
  const showableData = await dataFetch();
  console.log(showableData.products);
  return (
    <div>
        <h2>SSR : API DATA</h2>
      {showableData.products.map((i) => {
        return <p key={i.id}>{i.title}</p>
      })}
    </div>
  );
};

export default SSRExample;

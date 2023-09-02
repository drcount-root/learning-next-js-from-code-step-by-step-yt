import React from "react";

const EnvironmentVariablesUseCases = () => {
  // logs on server side only, as environment variables are only accessible on server side
  console.log("env", process.env);
  console.log("\nprocess.env.NODE_ENV =>", process.env.NODE_ENV);
  const sp = process.env.SERVER_PASSWORD;
  const un = process.env.MY_NAME;
  return (
    <div>
      <h1>env var</h1>
      <h2>Username - {un}</h2>
      <h2>Server Password - {sp}</h2>
      {process.env.NODE_ENV === "development" ? (
        <p>Development Mode</p>
      ) : (
        <p>Production Mode</p>
      )}
    </div>
  );
};

export default EnvironmentVariablesUseCases;

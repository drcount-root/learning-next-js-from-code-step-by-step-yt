"use client";

import { useEffect, useState } from "react";

const Update = ({ params }) => {
  let userId = params.userId;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const getUserDetails = async () => {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`);
    const data = await response.json();
    // return data;
    setName(data.result[0].name);
    setAge(data.result[0].age);
    setEmail(data.result[0].email);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const updateUser = async () => {
    const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });

    const data = await response.json();

    if (data.success) {
      alert("User data updated");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "400px",
      }}
    >
      <h2>update user details</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={updateUser}>Update user</button>
    </div>
  );
};

export default Update;

"use client";

import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    const data = await response.json();
    if (data.success) {
      alert("New user added");
    } else {
      alert("Some error with data please check and try again");
    }
    return data;
  };

  return (
    <div>
      <h1>Add New User</h1>
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
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default AddUser;

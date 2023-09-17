"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();

  const onImageSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted", file);

    const data = new FormData();
    data.set("file", file);
    const result = await fetch("api/upload", {
      method: "POST",
      body: JSON.stringify(data),
    });

    console.log(result)
  };

  return (
    <main>
      <h1>Upload Image</h1>
      <form onSubmit={onImageSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </main>
  );
}

"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  return (
    <>
      <div>Login page</div>
      <button onClick={() => router.push("/")}>Get back to home page</button>
    </>
  );
};

export default Login;

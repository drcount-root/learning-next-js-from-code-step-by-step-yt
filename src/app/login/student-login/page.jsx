"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StudentLogin = () => {
  const router = useRouter();

  const navigate = (x) => {
    router.push("/login/" + x);
  };

  return (
    <>
      <div>Student Login</div>
      <Link href="/">Go To Home page</Link>
      <br />
      <br />
      <button onClick={() => navigate("teacher-login")}>
        Login As A Teacher
      </button>
    </>
  );
}

export default StudentLogin

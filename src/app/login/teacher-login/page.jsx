"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TeacherLogin = () => {
  const router = useRouter();

  const navigate = (x) => {
    router.push("/login/" + x);
  };

  return (
    <>
      <div>Teacher Login</div>
      <Link href="/">Go To Home page</Link>
      <br />
      <br />
      <button onClick={() => navigate("student-login")}>
        Login As A Student
      </button>
    </>
  );
};

export default TeacherLogin;

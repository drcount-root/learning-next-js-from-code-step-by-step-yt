import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div>About page</div>
      <Link href="/" style={{color: "red"}}>Go Back To Home Page</Link>
    </>
  );
};

export default About;

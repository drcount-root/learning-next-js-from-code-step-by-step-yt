"use client";
import React from "react";
// import { usePathname } from 'next/navigation'

const StudentDetails = ({ params }) => {
  // const pathname = usePathname();
  // console.log(pathname);

  return (
    <div>
      <h2>Student&apos;s Details Page</h2>
      {/* Student <strong style={{color: "yellow"}}>{pathname.slice(13)}</strong> details */}
      <strong style={{ color: "red" }}>
        {params.studentId}
        &apos;s
      </strong>
      details
    </div>
  );
};

export default StudentDetails;

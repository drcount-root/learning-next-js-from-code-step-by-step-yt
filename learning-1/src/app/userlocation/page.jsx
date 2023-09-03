"use client";
import Script from "next/script";
import React from "react";

const UserLocation = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => console.log("userlocation page loaded")}
      />
      <h2>Get user location</h2>
    </div>
  );
};

export default UserLocation;

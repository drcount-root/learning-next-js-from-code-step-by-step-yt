import React from 'react'

export function generateMetadata() {
  return {
    title: "Error!",
    description: "Route not found",
  };
}

const NotFound = () => {
  return (
    <div>
      <h2>This page is not found!</h2>
    </div>
  )
}

export default NotFound

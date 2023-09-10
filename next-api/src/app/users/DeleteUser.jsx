"use client";

export default function DeleteUser({ id }) {
  const deleteUser = async () => {
    const response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "Delete",
    });
    const data = await response.json();
    if (data.success) {
      alert("user is deleted");
    } else {
      alert("error in deleting user");
    }
  };

  return (
    <>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
}

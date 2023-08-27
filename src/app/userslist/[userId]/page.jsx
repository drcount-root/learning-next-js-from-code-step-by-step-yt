import React from "react";
import { getUsers } from "../../../../services/getUsers";

const UserDetailss = async ({ params }) => {
  const getUserList = getUsers();
  const users = await getUserList;
  const userDetails = users[params.userId-1];
  console.log(userDetails);

  return (
    <div>
      <p>Name - {userDetails.name}</p>
      <p>Username - {userDetails.username}</p>
      <p>Email - {userDetails.email}</p>
      <p>Phone Number - {userDetails.phone}</p>
    </div>
  );
};

export default UserDetailss;

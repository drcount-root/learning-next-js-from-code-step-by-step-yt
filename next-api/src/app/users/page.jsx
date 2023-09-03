import Link from "next/link";

const getUsersList = async (API_URL) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const UsersList = async () => {
  const usersData = await getUsersList(process.env.API_URL);
  return (
    <>
      <h1>users list</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {usersData.map((user) => (
          <Link href={`users/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default UsersList;

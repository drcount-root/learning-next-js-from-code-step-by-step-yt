import Link from "next/link";
import DeleteUser from './DeleteUser';

const style={
  display: 'flex',
  gap: '20px'
}

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
          <div style={style}>
            <Link href={`users/${user.id}`} key={user.id}>
              {user.name}
            </Link>
            <span>
              <Link href={`users/${user.id}/update`}>Edit</Link>
            </span>
            <DeleteUser id={user.id}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersList;

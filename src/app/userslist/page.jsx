import Link from "next/link";
import { getUsers } from "../../../services/getUsers";

const UsersList = async () => {
  const data = getUsers();
  const users = await data;
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          <Link href={`/userslist/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default UsersList;
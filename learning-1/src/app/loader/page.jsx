// SSR - Server Side Rendering

async function userList() {
  let data = await fetch("https://dummyjson.com/users", { cache: 'no-store' });
  data = await data.json();
  return data.users;
}

export default async function Page() {
  let users = await userList();
  console.log(users);
  return (
    <div>
      <h1>User Name List</h1>
      {users.map((item) => (
        <div key={item.id}>
          <h2>User Name: {item.firstName}</h2>
        </div>
      ))}
    </div>
  );
}

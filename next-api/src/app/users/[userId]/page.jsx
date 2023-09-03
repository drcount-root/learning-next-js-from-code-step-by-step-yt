const getUserDetails = async (API_URL) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.result[0];
};

const UserDetails = async ({ params }) => {
  const userDeatils = await getUserDetails(
    process.env.API_URL + `/${params.userId}`
  );
  return (
    <div className="spaceX-card-body">
      <h2>{userDeatils.id}</h2>
      <p>Name: {userDeatils.name}</p>
      <p>Age: {userDeatils.age}</p>
      <p>Email: {userDeatils.email}</p>
    </div>
  );
};

export default UserDetails;

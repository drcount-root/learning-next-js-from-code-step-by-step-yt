export const getUsers = async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const res = await response.json();
    return res;
}
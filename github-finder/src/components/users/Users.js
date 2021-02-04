import React, { useEffect, useState } from "react";
import useFetch from "use-http";
import UserItem from "./UserItem";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
};

const exampleUsers = [
  {
    login: "mojombo",
    id: 1,
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  },
  {
    login: "defunkt",
    id: 2,
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    html_url: "https://github.com/defunkt",
  },
  {
    login: "pjhyett",
    id: 3,
    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    html_url: "https://github.com/pjhyett",
  },
];

const Users = (props) => {
  const [users, setUsers] = useState([]);

  const { get, response, loading, error } = useFetch("https://api.github.com");

  useEffect(() => {
    loadInitialUsers();
  }, []);

  async function loadInitialUsers() {
    const fetchedUsers = await get("users");
    if (response.ok) setUsers(fetchedUsers);
  }

  return (
    <div style={userStyle}>
      {error && `Error: ${error}`}
      {loading && "Loading..."}
      {users.map((user) => (
        <UserItem key={user.id} user={user}></UserItem>
      ))}
    </div>
  );
};

export default Users;

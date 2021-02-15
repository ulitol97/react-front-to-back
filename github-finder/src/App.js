import React, { useEffect, useState } from "react";
import useFetch from "use-http";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

const apiUrl = "https://api.github.com";
const usersEndpoint = `users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

const App = () => {
  const [users, setUsers] = useState([]);
  const { get, response, loading, error } = useFetch(apiUrl);

  useEffect(() => {
    loadInitialUsers();
  }, []);

  async function loadInitialUsers() {
    const fetchedUsers = await get(usersEndpoint);
    if (response.ok) setUsers(fetchedUsers);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <label htmlFor="search">Search users:</label>
        <input id="search" type="text" autoFocus></input>
        <Users users={users} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default App;

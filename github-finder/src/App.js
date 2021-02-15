import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useFetch from "use-http";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Search from "./components/users/Search";
import Users from "./components/users/Users";

const apiUrl = "https://api.github.com";
const apiCredentialsString = `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
const usersBaseEndpoint = `users${apiCredentialsString}`;
const usersSearchEndpoint = `search/users${apiCredentialsString}`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState();
  const [alert, setAlert] = useState();

  // UseFetch hook
  const { get, response, loading, error } = useFetch(apiUrl);

  useEffect(() => {
    loadInitialUsers();
  }, []);

  // Load default GitHub users
  async function loadInitialUsers() {
    const fetchedUsers = await get(usersBaseEndpoint);
    if (response.ok) {
      setUsers(fetchedUsers);
      setResults(fetchedUsers.length);
    }
  }

  // Load GitHub users by username
  async function searchUsers(query) {
    const fetchedUsers = await get(`${usersSearchEndpoint}&q=${query}`);
    if (response.ok) {
      setUsers(fetchedUsers.items);
      setResults(fetchedUsers.total_count);
    }
  }

  // Clear users from state
  function clearUsers() {
    setUsers([]);
    setResults(null);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          {alert && <Alert msg={alert.msg} type={alert.type}></Alert>}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0}
                    setAlert={setAlert}
                  />
                  <Users
                    users={users}
                    loading={loading}
                    error={error}
                    results={results}
                  />
                </Fragment>
              )}
            ></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

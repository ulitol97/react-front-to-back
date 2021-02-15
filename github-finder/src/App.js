import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useFetch from "use-http";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";

const apiUrl = "https://api.github.com";
const apiCredentialsString = `?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
const usernamePlaceholder = "[USER_NAME_PLACEHOLDER]";

const usersBaseEndpoint = `users${apiCredentialsString}`;
const usersSearchEndpoint = `search/users${apiCredentialsString}`;
const usersProfileEndpoint = `users/${usernamePlaceholder}${apiCredentialsString}`;
const usersReposEndpoint = `users/${usernamePlaceholder}/repos${apiCredentialsString}&sort=created:asc`;

const App = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});
  const [results, setResults] = useState();
  const [alert, setAlert] = useState();

  // UseFetch hook
  const { get, response, loading, error } = useFetch(apiUrl);

  useEffect(() => {
    // loadInitialUsers();
  }, []);

  // Load default GitHub users
  async function loadInitialUsers() {
    const fetchedUsers = await get(usersBaseEndpoint);
    if (response.ok) {
      setUsers(fetchedUsers);
      setResults(fetchedUsers.length);
    }
  }

  // Load GitHub users by username search
  async function searchUsers(query) {
    const fetchedUsers = await get(`${usersSearchEndpoint}&q=${query}`);
    if (response.ok) {
      setUsers(fetchedUsers.items);
      setResults(fetchedUsers.total_count);
    }
  }

  // Load GitHub specific user by username
  async function getUser(username) {
    const fetchedUser = await get(
      `${usersProfileEndpoint.replace(usernamePlaceholder, username)}`
    );
    if (response.ok) {
      setUser(fetchedUser);
    }
  }

  // Load user's repos by username
  async function getUserRepos(username) {
    const fetchedRepos = await get(
      `${usersReposEndpoint.replace(usernamePlaceholder, username)}`
    );
    if (response.ok) {
      console.log(fetchedRepos)
      setRepos(fetchedRepos);
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
              render={() => (
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
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                  error={error}
                ></User>
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

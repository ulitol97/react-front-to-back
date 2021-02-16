import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                ></Route>
                <Route
                  exact
                  path="/user/:login"
                  render={(props) => <User {...props}></User>}
                ></Route>
                <Route exact path="/about" component={About}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

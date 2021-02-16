import React, { Fragment, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
};

const Users = (props) => {
  // Recover context and destructure its contents
  const githubContext = useContext(GithubContext);
  const { users, loading, error, results } = githubContext;

  if (loading) {
    return <Spinner />;
  } else if (error && !users) {
    return `Error: ${error}`;
  } else {
    return (
      <Fragment>
        <hr />
        {results != null && (
          <Fragment>
            <h3>
              {results} {results === 1 ? "result" : "results"}
            </h3>
          </Fragment>
        )}
        <div style={userStyle}>
          {users.map((user) => (
            <UserItem key={user.id} user={user}></UserItem>
          ))}
        </div>
      </Fragment>
    );
  }
};

export default Users;

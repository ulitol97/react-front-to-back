import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
};

const Users = ({ users, loading, error, results }) => {
  if (loading) {
    return <Spinner />;
  } else if (error) {
    return `Error: ${error}`;
  } else {
    return (
      <Fragment>
        <hr />
        {results != null && (
          <Fragment>
            <h3>
              {results} {results == 1 ? "result" : "results"}
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

Users.defaultProps = {
  results: null,
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  users: PropTypes.array.isRequired,
  results: PropTypes.number,
};

export default Users;

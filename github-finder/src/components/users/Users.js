import PropTypes from "prop-types";
import React from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
};

const Users = ({ users, loading, error }) => {
  if (loading) {
    return <Spinner />;
  } else if (error) {
    return `Error: ${error}`;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  users: PropTypes.array.isRequired,
};

export default Users;

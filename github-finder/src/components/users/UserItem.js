import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  const { login, avatar_url, html_url } = user;

  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt={`Avatar of ${login}`}
      ></img>
      <h4>{login}</h4>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

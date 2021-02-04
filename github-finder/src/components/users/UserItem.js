import PropTypes from "prop-types";
import React from "react";

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
        <a
          target="_blank"
          rel="noreferrer"
          href={html_url}
          className="btn btn-dark btn-sm my-1"
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

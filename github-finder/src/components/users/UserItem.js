import PropTypes from "prop-types";
import React, { Component } from "react";

class UserItem extends Component {

  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          className="round-img"
          src={avatar_url}
          alt={`Avatar of ${login}`}
        ></img>
        <h3>{login}</h3>
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
  }

  // Props
  static propTypes = {
    user: PropTypes.object.isRequired,
  };
}

export default UserItem;

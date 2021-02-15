import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <Link to="/">
          {icon} {title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// Props
Navbar.defaultProps = {
  title: "GitHub Finder",
  icon: <i className="fab fa-github"></i>,
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Navbar;

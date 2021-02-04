import PropTypes from "prop-types";
import React from "react";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {icon} {title}
      </h1>
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

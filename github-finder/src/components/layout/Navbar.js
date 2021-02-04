import PropTypes from "prop-types";
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          {this.props.icon} {this.props.title}
        </h1>
      </nav>
    );
  }

  // Props
  static defaultProps = {
    title: "GitHub Finder",
    icon: <i className="fab fa-github"></i>,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  };
}

export default Navbar;

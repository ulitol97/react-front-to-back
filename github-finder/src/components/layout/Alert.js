import PropTypes from "prop-types";
import React from "react";

const Alert = ({ msg, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      <i className="fas fa-info-circle" /> {msg}
    </div>
  );
};

Alert.defaultProps = {
  type: "light",
};

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;

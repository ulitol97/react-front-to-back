import PropTypes from "prop-types";
import React from "react";

const TechItem = ({ tech: { firstName, lastName } }) => {
  return (
    <div>
      {firstName} {lastName}
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </div>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;

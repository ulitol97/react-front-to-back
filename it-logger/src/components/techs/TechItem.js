import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux"; // Bridges component with redux
import { deleteTech } from "../../actions/techActions";


const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  function onDelete() {
    deleteTech(id);
    M.toast({ html: `Removed technician: ${firstName} ${lastName}` });
  }

  return (
    <div>
      {firstName} {lastName}
      <a href="#!" onClick={onDelete} className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </div>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);

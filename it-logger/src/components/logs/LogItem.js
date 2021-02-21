import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux"; // Bridges component with redux
import { deleteLog, setCurrent } from "../../actions/logActions";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  function onDelete() {
    deleteLog(log.id);
    M.toast({ html: `Removed log #${log.id}` });
  }

  function onSelected() {
    setCurrent(log);
  }

  return (
    <li className="collection-item">
      <div>
        <a
          onClick={onSelected}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="Do MMMM YYYY, HH:mm:ss" className="black-text">
            {log.date}
          </Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);

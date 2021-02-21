import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux"; // Bridges component with redux
import { addLog } from "../../actions/logActions";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState();

  function onSubmit() {
    const validated = validateLog();
    if (validated) {
      addLog({ message, attention, tech, date: new Date() });
      M.toast({ html: `New log added by ${tech}` });
    }
    clearFields();
  }

  function validateLog() {
    if (message.trim() === "" || !tech || tech.trim === "") {
      M.toast({ html: "Fill in all fields" });
      return false;
    }

    return true;
  }

  function clearFields() {
    setMessage("");
    setAttention(false);
    setTech(null);
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              defaultValue="_default"
              className="browser-default"
              name="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="_default" disabled>
                Select technician
              </option>
              <option value="John">John</option>
              <option value="Mark">Mark</option>
              <option value="Susan">Susan</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  className="filled-in"
                  name="attention"
                  type="checkbox"
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light blue btn"
        >
          Add log
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};


// Link component with redux store: connect(pieces of state we need, {actions we need})(Component)
// Pieces of state and actions are passed as props
export default connect(null, { addLog })(AddLogModal);

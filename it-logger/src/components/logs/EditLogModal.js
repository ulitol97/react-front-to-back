import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux"; // Bridges component with redux
import { updateLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState("");
  const [tech, setTech] = useState("");

  // Initial form data equals the data of the selected log
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  function onSubmit() {
    const validated = validateLog();
    if (validated) {
      updateLog({ ...current, message, attention, tech, date: new Date() });
      M.toast({ html: `Log edited by ${tech}` });
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
    setTech("");
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="tech"
              value={tech || "_default"}
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="_default" disabled>
                Select technician
              </option>
              <TechSelectOptions />
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
          Edit log
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

// Pieces of the root reducer's state we want available as props
const mapStateToProps = (state) => ({
  current: state.log.current,
});

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { updateLog })(EditLogModal);

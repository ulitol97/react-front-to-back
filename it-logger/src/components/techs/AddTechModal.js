import M from "materialize-css/dist/js/materialize.min.js";
import React, { useState } from "react";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onSubmit() {
    const validated = validateTech();
    if (validated) {
      console.log("Submit technician.");
    }
    clearFields();
  }

  function validateTech() {
    if (firstName.trim() === "" || lastName.trim === "") {
      M.toast({
        html: "Fill in all fields",
        classes: "white-text",
      });
      return false;
    }

    return true;
  }

  function clearFields() {
    setFirstName("");
    setLastName("");
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Enter new technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="first-name" className="active">
              First name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="last-name" className="active">
              Last name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light blue btn"
        >
          Add technician
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;

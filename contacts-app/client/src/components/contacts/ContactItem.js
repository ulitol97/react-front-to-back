import PropTypes from "prop-types";
import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import { ContactTypesEnum } from "../../context/types";

const ContactItem = ({ contact }) => {
  const { name, surname, email, phone, type } = contact;

  const { current, deleteContact, setCurrent, clearCurrent } = useContext(
    ContactContext
  );

  function onDelete() {
    deleteContact(contact);
    if (current === contact) {
      clearCurrent();
    }
  }

  function onEdit() {
    setCurrent(contact);
  }

  return (
    <div className={`card bg-${current === contact ? "selected" : "light"}`}>
      <h3 className="text-primary text-left">
        {`${name} ${surname}`}
        <span
          style={{ float: "right" }}
          className={`badge ${
            type === ContactTypesEnum.personal
              ? "badge-primary"
              : "badge-success"
          }`}
        >
          {type}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;

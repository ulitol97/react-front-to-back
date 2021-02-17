import PropTypes from "prop-types";
import React from "react";
import { ContactTypesEnum } from "../../context/types";

const ContactItem = ({ contact }) => {
  const { name, surname, email, phone, type } = contact;

  return (
    <div className="card bg-light">
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
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;

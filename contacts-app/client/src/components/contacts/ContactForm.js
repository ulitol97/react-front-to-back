import React, { useContext, useEffect, useState } from "react";
import {
  default as contactContext,
  default as ContactContext
} from "../../context/contact/contactContext";
import { ContactTypesEnum } from "../../context/types";

const ContactForm = () => {
  const defaultContact = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    type: ContactTypesEnum.personal,
  };

  const [contact, setContact] = useState(defaultContact);
  const { name, surname, email, phone, type } = contact;

  const {
    errors,
    current,
    addContact,
    updateContact,
    setCurrent,
    clearCurrent,
  } = useContext(ContactContext);

  useEffect(() => {
    if (current != null) {
      setContact({ ...defaultContact, ...current });
    } else {
      setContact(defaultContact);
    }
    // eslint-disable-next-line
  }, [contactContext, current]);

  function onChange(e) {
    const updatedContact = {
      ...contact,
      [e.target.name]: e.target.value,
    };

    setContact(updatedContact);
  }

  function onSubmit(e) {
    e.preventDefault();
    // Remove empty fields in contact
    removeEmpty();
    // Add contact
    if (current === null) {
      addContact(contact);
      if (!errors || errors.length === 0) setContact(defaultContact);
    }
    // Edit/update contact
    else {
      updateContact(contact);
      if (!errors || errors.length === 0) setCurrent(contact);
    }
  }

  function removeEmpty() {
    for (const prop in contact) {
      if (!contact[prop]) {
        delete contact[prop];
      }
    }
  }

  function clearAll() {
    clearCurrent();
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current == null ? "Add a contact" : "Edit contact"}
      </h2>
      <label htmlFor="form-name">Name:</label>
      <input
        id="form-name"
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      ></input>
      <label htmlFor="form-surname">Surname:</label>
      <input
        id="form-surname"
        type="text"
        name="surname"
        value={surname}
        onChange={onChange}
      ></input>
      <label htmlFor="form-email">Email:</label>
      <input
        id="form-email"
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      ></input>
      <label htmlFor="form-phone">Phone:</label>
      <input
        id="form-phone"
        type="text"
        name="phone"
        value={phone}
        onChange={onChange}
      ></input>
      <label htmlFor="form-type">Type:</label>
      <select id="form-type" name="type" value={type} onChange={onChange}>
        {Object.values(ContactTypesEnum).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <hr />
      <div>
        <input
          type="submit"
          value={current == null ? "Add contact" : "Edit contact"}
          className="btn btn-primary btn-block"
        />
        {current && (
          <div>
            <button className="btn btn-danger btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

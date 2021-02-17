import React, { useReducer } from "react";
import uuid from "uuid";
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  SET_CURRENT,
  UPDATE_CONTACT
} from "../types";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = (props) => {
  const initialState = {
    current: null, // Currently selected contact
    filtered: null, // Array of filtered contacts
    contacts: [
      // Contacts in UI
      {
        type: "professional",
        id: "0",
        name: "Gui",
        surname: "Dos",
        phone: "12346799",
        user: "602c0831bb408682d7d23e43",
        date: "2021-02-16T20:09:49.641Z",
      },
      {
        type: "personal",
        id: "1",
        name: "Guille",
        surname: "Uli",
        phone: "123456678",
        user: "602c0831bb408682d7d23e43",
        date: "2021-02-16T20:08:25.573Z",
      },
      {
        type: "personal",
        id: "2",
        name: "Ejemplo",
        surname: "Ajeno",
        email: "test@test.es",
        phone: "123456678",
        user: "602c0831bb408682d7d23e43",
        date: "2021-02-17T13:05:24.203Z",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Create contact
  function addContact(contact) {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  }

  // Delete contact
  function deleteContact(contact) {
    dispatch({
      type: DELETE_CONTACT,
      payload: contact,
    });
  }

  // Update contact
  function updateContact(contact) {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  }

  // Set current contact
  function setCurrent(contact) {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  }

  // Clear current contact
  function clearCurrent() {
    dispatch({
      type: CLEAR_CURRENT,
    });
  }

  // Filter contacts
  function filterContacts(filter) {
    dispatch({
      type: FILTER_CONTACTS,
      payload: filter,
    });
  }

  // Clear filter
  function clearFilter(filter) {
    dispatch({
      type: CLEAR_FILTER,
    });
  }

  return (
    <ContactContext.Provider
      value={{
        current: state.current,
        contacts: state.contacts,
        filtered: state.filtered,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

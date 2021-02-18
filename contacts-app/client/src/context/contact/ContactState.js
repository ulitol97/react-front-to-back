import axios from "axios";
import React, { useReducer } from "react";
import {
  ADD_CONTACT,
  CLEAR_CONTACTS,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  GET_CONTACTS,
  SET_CURRENT,
  SET_FILTER,
  UPDATE_CONTACT
} from "../types";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = (props) => {
  const initialState = {
    current: null, // Currently selected contact
    filtered: null, // Array of filtered contacts
    filter: "",
    contacts: null,
    errors: [],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Get contacts
  async function getContacts() {
    try {
      const response = await axios.get("/api/contacts");
      dispatch({
        type: GET_CONTACTS,
        payload: response.data, // Array of contacts
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.data,
      });
    }
  }

  // Create contact
  async function addContact(contactData) {
    try {
      const response = await axios.post("/api/contacts", contactData);
      dispatch({
        type: ADD_CONTACT,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.data,
      });
    }
  }

  // Delete contact
  async function deleteContact(id) {
    try {
      await axios.delete(`/api/contacts/${id}`);
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.data,
      });
    }
  }

  // Update contact
  async function updateContact(contactData) {
    try {
      const response = await axios.put(
        `/api/contacts/${contactData._id}`,
        contactData
      );
      dispatch({
        type: UPDATE_CONTACT,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.data,
      });
    }
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

  // Set filter
  function setFilter(filter) {
    dispatch({
      type: SET_FILTER,
      payload: filter,
    });
  }

  // Clear filter
  function clearFilter(filter) {
    dispatch({
      type: CLEAR_FILTER,
    });
  }

  // Clear contacts
  function clearContacts() {
    dispatch({
      type: CLEAR_CONTACTS,
    });
  }

  return (
    <ContactContext.Provider
      value={{
        current: state.current,
        contacts: state.contacts,
        filtered: state.filtered,
        filter: state.filter,
        errors: state.errors,
        getContacts,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        setFilter,
        clearFilter,
        clearContacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

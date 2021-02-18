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

export default function reducer(state, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload, loading: false };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };

    case DELETE_CONTACT:
      return {
        ...state,
        filtered:
          state.filtered &&
          state.filtered.filter((contact) => contact._id !== action.payload),
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
        loading: false,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        loading: false,
      };

    case SET_CURRENT:
      return { ...state, current: action.payload };

    case CLEAR_CURRENT:
      return { ...state, current: null };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    case FILTER_CONTACTS:
      const filter = action.payload.toLowerCase();
      return {
        ...state,
        filtered: state.contacts.filter(
          (contact) =>
            contact.name.toLowerCase().includes(filter) ||
            contact.surname?.toLowerCase().includes(filter) ||
            contact.email?.toLowerCase().includes(filter) ||
            contact.phone?.toString().includes(filter)
        ),
      };

    case CLEAR_CONTACTS:
      return {
        ...state,
        current: null,
        filtered: null,
        filter: "",
        contacts: null,
        errors: [],
      };

    case CLEAR_FILTER:
      return { ...state, filtered: null };

    case CONTACT_ERROR:
      return { ...state, errors: action.payload?.errors || [] };

    default:
      return state;
  }
}

import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  SET_CURRENT,
  SET_FILTER,
  UPDATE_CONTACT
} from "../types";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case DELETE_CONTACT:
      return {
        ...state,
        filtered:
          state.filtered &&
          state.filtered.filter((contact) => contact.id !== action.payload.id),
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
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

    case CLEAR_FILTER:
      return { ...state, filtered: null };

    default:
      return state;
  }
}

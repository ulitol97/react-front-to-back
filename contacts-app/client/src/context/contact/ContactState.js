import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: "professional",
        _id: "602c268dac1666a82c73b6dc",
        name: "Gui",
        surname: "Dos",
        phone: "12346799",
        user: "602c0831bb408682d7d23e43",
        date: "2021-02-16T20:09:49.641Z",
      },
      {
        type: "personal",
        _id: "602c2639ac1666a82c73b6db",
        name: "Guille",
        surname: "Uli",
        phone: "123456678",
        user: "602c0831bb408682d7d23e43",
        date: "2021-02-16T20:08:25.573Z",
      },
      {
        type: "personal",
        _id: "602d149441060d5734cd8e37",
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

  // Delete contact

  // Update contact

  // Set current contact

  // Clear current contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

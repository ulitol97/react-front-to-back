import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertContext from "../../context/alert/alertContext";
import ContactContext from "../../context/contact/contactContext";
import Filter from "../../context/contact/Filter";
import Spinner from "../layout/Spinner";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { loading, errors, contacts, filtered, getContacts } = contactContext;

  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (errors && errors.length) {
      setAlert(errors[0].msg, "danger");
    }
    // eslint-disable-next-line
  }, [errors]);

  if (contacts?.length === 0) {
    return <h3>Please, add a contact.</h3>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          <Filter />
          <TransitionGroup>
            {filtered
              ? filtered.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={600}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))
              : contacts.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={600}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;

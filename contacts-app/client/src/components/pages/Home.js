import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import ContactForm from "../contacts/ContactForm";
import Contacts from "../contacts/Contacts";

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>

      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;

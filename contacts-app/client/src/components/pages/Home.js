import React from "react";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="grid-2">
      <h1>Contact form</h1>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;

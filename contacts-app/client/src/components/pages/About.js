import React from "react";

const About = () => {
  return (
    <div>
      <h1>About this app</h1>
      <p>
        App to store your contacts thanks to our API (React client for a full
        stack app).
      </p>
      <p>
        <strong>Version: </strong> 1.0.0
      </p>
      <p>&#169;{new Date().getFullYear()}</p>
    </div>
  );
};

export default About;

import React from "react";

const About = () => {
  return (
    <div>
      <h1>About this app</h1>
      <p>
        App to search for GitHub users and visualize their information via
        GitHub's public API.
      </p>
      <p>&#169;{new Date().getFullYear()}</p>
    </div>
  );
};

export default About;

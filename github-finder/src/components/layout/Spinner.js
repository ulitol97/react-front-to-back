import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  const spinnerStyle = {
    width: "200px",
    display: "block",
    margin: "auto",
  };

  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={spinnerStyle}></img>
    </Fragment>
  );
};

export default Spinner;

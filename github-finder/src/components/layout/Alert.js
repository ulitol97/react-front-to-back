import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = (props) => {
  const alertContext = useContext(AlertContext);
  const { msg, type } = alertContext;

  if (msg) {
    return (
      <div className={`alert alert-${type}`}>
        <i className="fas fa-info-circle" /> {msg}
      </div>
    );
  }

  return null;
};

export default Alert;

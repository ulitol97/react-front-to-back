import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const AlertItem = ({ alert }) => {
  const { clearAlert } = useContext(AlertContext);

  function onClose() {
    clearAlert(alert);
  }

  return (
    <div className={`alert alert-flex alert-${alert.type} `}>
      <div>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
      <button onClick={onClose} className="btn btn-alert">
        <i className="fas fa-times" />
      </button>
    </div>
  );
};

export default AlertItem;

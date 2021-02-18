import React, { useReducer } from "react";
import uuid from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  function setAlert(msg, type, timeout = 5000) {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: {
        id,
        msg,
        type,
      },
    });

    // Clear after certain time
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout
    );
  }

  // Clear alert
  function clearAlert(alert) {
    dispatch({
      type: REMOVE_ALERT,
      payload: alert.id,
    });
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
        clearAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

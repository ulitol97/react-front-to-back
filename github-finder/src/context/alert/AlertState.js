import { useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

// Initial state and related actions
const AlertState = (props) => {
  const initialState = {
    msg: null,
    type: "light",
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set alert
  function setAlert(msg, type) {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
      },
    });
  }

  // Remove alert
  function removeAlert() {
    dispatch({
      type: REMOVE_ALERT,
    });
  }

  return (
    <AlertContext.Provider
      value={{
        msg: state.msg,
        type: state.type,
        setAlert,
        removeAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

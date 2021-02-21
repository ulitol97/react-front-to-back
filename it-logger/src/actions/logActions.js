import {
  ADD_LOG,
  CLEAR_CURRENT,
  DELETE_LOG,
  GET_LOGS,
  LOGS_ERROR,
  SEARCH_LOGS,
  SET_CURRENT,
  SET_LOADING,
  UPDATE_LOG
} from "./types";

// Get logs from server
export const getLogs = () => async (dispatch) => {
  setLoading(true);

  try {
    const response = await fetch("/logs");
    const data = await response.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  } finally {
    setLoading(false);
  }
};

// Add new log to server and state
export const addLog = (logData) => async (dispatch) => {
  setLoading(true);

  try {
    const response = await fetch("/logs", {
      method: "post",
      body: JSON.stringify(logData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  } finally {
    setLoading(false);
  }
};

// Update log in server and state
export const updateLog = (logData) => async (dispatch) => {
  setLoading(true);

  try {
    const response = await fetch(`/logs/${logData.id}`, {
      method: "put",
      body: JSON.stringify(logData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });

    clearCurrent();
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  } finally {
    setLoading(false);
  }
};

// Remove log from server and state
export const deleteLog = (id) => async (dispatch) => {
  setLoading(true);

  try {
    await fetch(`/logs/${id}`, {
      method: "delete",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  } finally {
    setLoading(false);
  }
};

// Filter logs by text
export const searchLogs = (query) => async (dispatch) => {
  setLoading(true);

  try {
    const response = await fetch(`/logs?q=${query}`);
    const data = await response.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  } finally {
    setLoading(false);
  }
};

// Set current log in state
export function setCurrent(log) {
  return {
    type: SET_CURRENT,
    payload: log,
  };
}

// Clear current log in state
export function clearCurrent() {
  return {
    type: CLEAR_CURRENT,
  };
}

// Set loading value
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}

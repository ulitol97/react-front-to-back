import {
  ADD_TECH,

  DELETE_TECH,
  GET_TECHS,

  SET_LOADING,
  TECHS_ERROR
} from "./types";

// Get techs from server
export const getTechs = () => async (dispatch) => {
  setLoading(true);

  try {
    const response = await fetch("/techs");
    const data = await response.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  } finally {
    setLoading(false);
  }
};

// Add new technician to server and state
export const addTech = (techData) => async (dispatch) => {
  setLoading(true);

  try {
    const response = await fetch("/techs", {
      method: "post",
      body: JSON.stringify(techData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  } finally {
    setLoading(false);
  }
};

// Remove technician from server and state
export const deleteTech = (id) => async (dispatch) => {
  setLoading(true);

  try {
    await fetch(`/techs/${id}`, {
      method: "delete",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  } finally {
    setLoading(false);
  }
};

// Set loading value
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}

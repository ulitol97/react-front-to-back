import { REMOVE_ALERT, SET_ALERT } from "../types";

const maxAlerts = 3;

export default function reducer(state, action) {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload].slice(-maxAlerts);

    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);

    default:
      return state;
  }
}

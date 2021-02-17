import {
  AUTH_ERROR,

  CLEAR_ERRORS,



  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,



  USER_LOADED
} from "../types";

export default function reducer(state, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return state;

    case REGISTER_FAILURE:
      return state;

    case USER_LOADED:
      return state;

    case AUTH_ERROR:
      return state;

    case LOGIN_SUCCESS:
      return state;

    case LOGIN_FAILURE:
      return state;

    case LOGOUT:
      return state;

    case CLEAR_ERRORS:
      return state;

    default:
      return state;
  }
}

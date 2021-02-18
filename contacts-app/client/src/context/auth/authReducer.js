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
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        errors: action.payload.errors,
      };

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
      return { ...state, errors: [] };

    default:
      return state;
  }
}

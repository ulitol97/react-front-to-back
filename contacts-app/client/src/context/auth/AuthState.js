import axios from "axios";
import React, { useReducer } from "react";
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
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"), // Seek token in localStorage by default
    user: null,
    isAuthenticated: false,
    loading: true,
    errors: [],
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user
  async function loadUser() {
    try {
      const response = await axios.get("/api/auth");

      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data,
      });
    }
  }

  // Register user
  async function registerUser(userData) {
    try {
      const response = await axios.post("/api/users", userData);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data, // Token
      });

      loadUser();
    } catch (err) {
      console.log(err);
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.response.data, // Error message
      });
    }
  }

  // Login user
  async function login(userData) {
    try {
      const response = await axios.post("/api/auth", userData);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data, // Token
      });

      loadUser();
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data, // Error message
      });
    }
  }

  // Logout
  function logout() {
    dispatch({
      type: LOGOUT,
    });
  }

  // Clear errors
  function clearErrors() {
    dispatch({
      type: CLEAR_ERRORS,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        errors: state.errors,
        loadUser,
        registerUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

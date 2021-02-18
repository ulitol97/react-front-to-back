import axios from "axios";
import React, { useReducer } from "react";
import { CLEAR_ERRORS, REGISTER_FAILURE, REGISTER_SUCCESS } from "../types";
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
  function loadUser() {
    // TODO
  }

  // Register user
  async function registerUser(userData) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const response = await axios.post("/api/users", userData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data, // Token
      });

      clearErrors();
    } catch (err) {
      console.log(err);
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.response.data, // Error message
      });
    }
  }

  // Login user
  function login() {
    // TODO
  }

  // Logout
  function logout() {
    // TODO
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

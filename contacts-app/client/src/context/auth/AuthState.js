import React, { useReducer } from "react";
import useFetch from "use-http";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
  const { get, response, loading, error } = useFetch("SERVER_URL");

  const initialState = {
    token: localStorage.getItem("token"), // Seek token in localStorage by default
    user: null,
    isAuthenticated: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user

  // Register user

  // Login user

  // Logout

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading,
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

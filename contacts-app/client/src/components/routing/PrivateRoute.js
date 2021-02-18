import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;

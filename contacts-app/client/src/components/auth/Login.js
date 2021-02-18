import React, { useContext, useEffect, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const { setAlert } = useContext(AlertContext);
  const { isAuthenticated, login, errors, clearErrors } = useContext(AuthContext);

  useEffect(() => {
    // Redirect home if authenticated
    if (isAuthenticated) {
      props.history.replace("/");
    }
    if (errors && errors.length !== 0) {
      setAlert(errors[0].msg, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [errors, isAuthenticated]);

  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value.trim(),
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    // Attemp login
    const validated = validateUser();
    if (validated) {
      login({
        email,
        password,
      });
    }
  }

  function validateUser() {
    if (email === "" || password === "") {
      setAlert("Fill in all the fields", "danger");
      return false;
    }

    return true;
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />

          <label htmlFor="password">Password</label>
          <input
            required
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />

          <hr />

          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

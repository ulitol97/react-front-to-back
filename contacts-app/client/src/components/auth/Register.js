import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/alertContext";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const { name, surname, email, password, passwordRepeat } = user;

  const { setAlert } = useContext(AlertContext);

  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value.trim(),
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    // Attemp registration
    const validated = validateUser();
    if (validated) console.log("Submit registration.");
  }

  function validateUser() {
    if (name === "" || surname === "" || email === "" || password === "") {
      setAlert("Fill in all the fields", "danger");
      return false;
    } else if (password !== passwordRepeat) {
      setAlert("Passwords do not match", "danger");
      return false;
    }

    return true;
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />

          <label htmlFor="surname">Surname</label>
          <input
            required
            id="surname"
            type="text"
            name="surname"
            value={surname}
            onChange={onChange}
          />

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

          <label htmlFor="password-repeat">Repeat password</label>
          <input
            required
            id="password-repeat"
            type="password"
            name="passwordRepeat"
            value={passwordRepeat}
            onChange={onChange}
          />

          <hr />

          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const { name, surname, email, password, passwordRepeat } = user;

  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    // Attemp registration
    console.log("Submit registration.");
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <form className="form-group">
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
        </form>
      </form>
    </div>
  );
};

export default Register;

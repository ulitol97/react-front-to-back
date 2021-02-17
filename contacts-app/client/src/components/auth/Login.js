import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    // Attemp registration
    console.log("Login registration.");
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <form className="form-group">
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
        </form>
      </form>
    </div>
  );
};

export default Login;

import React, { Component } from "react";
import { withRouter, Redirect, Route, Navigate } from "react-router";
import app from "../base.js";
import { AuthContext } from "../auth.js";


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  static contextType = AuthContext;

  render() {
    const { currentUser } = this.context;

    if (currentUser) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleLogin}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;

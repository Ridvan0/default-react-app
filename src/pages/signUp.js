import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../base";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSignUp(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleSignUp}>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default  SignUp;

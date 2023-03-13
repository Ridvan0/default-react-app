import React, { Component } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const auth = firebase.auth();


export const AuthContext = React.createContext();


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      pending: true
    };
  }

  componentDidMount() {
    const auth = firebase.auth();
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user, pending: false });
    });
  }

  render() {
    const { currentUser, pending } = this.state;
    if (pending) {
      return <>Loading...</>;
    }
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { Auth as AuthProvider };

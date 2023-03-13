import React, {Component} from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import HomePage from "./pages/homePage";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import { AuthProvider } from "./auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
class App extends Component{
  render() {
    return (
        <div>
      <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
        </div>
    );
  }
}

export default App;
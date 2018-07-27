import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li className="navlink">
                <Link to="/">Home</Link>
              </li>
              <li className="navlink">
                <Link to="/myprofile">My Profile</Link>
              </li>
              <li className="navlink">
                <Link to="/login">Log In</Link>
              </li>
              <li className="navlink">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

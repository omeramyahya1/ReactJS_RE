import React, { Component } from "react";
import "./Login.css";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./Login.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="logo-container">Logo</div>
        <div className="credentials">
          <TextInput type="email" placeholder="email@example.com" />
          <TextInput type="password" placeholder="Password" />
        </div>
        <div className="terms-service">
          <input className="checbox" type="checkbox" />
          <label className="terms_text">
            I have read and agreed to terms of service
          </label>
        </div>
        <div className="submit">
          <Button className="btn" buttonColor="primary" buttonSize="btn--small">
            Login
          </Button>
          <Button className="btn" buttonColor="light" buttonSize="btn--small">
            SignUp
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;

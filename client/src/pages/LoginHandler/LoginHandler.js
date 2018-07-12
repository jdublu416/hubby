import React, { Component } from "react";
import Register from "../../components/Register";
import API from "../../util/API";
import Main from "../Main";
import { Link } from "react-router-dom";
import { Popover } from "react-bootstrap";
import Trigger from "../../components/Trigger";

const popoverRight = (
  <Popover id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

class LoginHandler extends Component {
  state = {
    password: "",
    email: "",
    password2: "",
    widgets: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleRegister = event => {
    console.log("click");
    event.preventDefault();
    if (this.state.password !== this.state.password2) {
      alert("these no match yo");
    } else if (this.state.password === this.state.password2) {
      API.saveUserData({
        password: this.state.password,
        email: this.state.email
      }).catch(err => console.log(err));
      // this.handleFormSubmit();
      // this.getUser();
    }
  };

  // handlePasswordCheck = () => {
  //   <Popover id="popover-positioned-scrolling-right" title="Popover right">
  //     <strong>Holy guacamole!</strong> Check this info.
  //   </Popover>;
  // };

  handleFormSubmit = event => {
    console.log("whoopsies");
    event.preventDefault();
    // this.getUser();
    if (this.state.email && this.state.password) {
      API.saveUser({
        password: this.state.password,
        email: this.state.email,
        devices: this.state.devices
      })
        .then(res => this.handleRegister())
        .catch(err => console.log(err));
    }
  };

  getUser = query => {
    // API.getUser(query);
    {
      return (
        <Link>
          <Main />
        </Link>
      );
    }
  };

  goToRegister = event => {
    console.log("clickity wickity");
    event.preventDefault();
    return <Register />;
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <form className="form-signin">
            <h3 className="form-signin-heading text-center">Login to Hubby:</h3>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Email Address"
              required
              autofocus=""
              onChange={this.handleInputChange}
            />
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required
              onChange={this.handleInputChange}
            />
            <label className="checkbox">
              <input
                type="checkbox"
                value="remember-me"
                id="rememberMe"
                name="rememberMe"
              />{" "}
              Remember me
            </label>
            <a
              className="btn btn-lg btn-primary btn-block"
              // onClick={}
              // type="submit"
              // onClick={props.handleFormSubmit}
            >
              Login
            </a>
            <div className="row">
              <h5 className="text-center either-or"> or </h5>
            </div>

            <Trigger
              handlePasswordCheck={this.handlePasswordCheck}
              handleInputChange={this.handleInputChange}
              handleRegister={this.handleRegister}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginHandler;

import React, { Component } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import API from "../../util/API";
import Main from "../Main";
import { Link } from "react-router-dom";

class LoginHandler extends Component {
  state = {
    password: "",
    email: "",
    password2: "",
    settings: []
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
    event.preventDefault();
    if (this.state.password !== this.state.password2) {
      alert("these no match yo");
    } else if (this.state.password === this.state.password2) {
      alert("you deed it");
      this.handleFormSubmit();
      this.getUser();
    }
  };

  handleFormSubmit = event => {
    console.log("whoopsies");
    event.preventDefault();
    // this.getUser();
    if (this.state.email && this.state.password) {
      API.saveUserData({
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      })
        .then(res => this.getUserSettings())
        .catch(err => console.log(err));
    }
  };
 

  getUserSettings = id => {
   API.getUserDataById
    {
      return (
      <Link>
        <Main />
      </Link>
      )
    }
  };

  goToRegister = event => {
    console.log("clickity wickity");
    event.preventDefault();
    return <Register />;
  };

  render() {
    return (
      <div>
        <Login
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleRegister={this.handleRegister}
          goToRegister={this.goToRegister}
        />
      </div>
    );
  }
}

export default LoginHandler;

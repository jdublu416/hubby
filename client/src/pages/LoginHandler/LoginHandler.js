import React, { Component } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";
import API from "../../util/API";
import Main from "../Main";
import { Link } from "react-router-dom";
import { Popover } from "react-bootstrap";
import { Modal } from "react-bootstrap";

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
    userData: []
  };

  componentDidMount() {
    this.loadUserSettings();
  }

  loadUserSettings = () => {
    API.getUser()
      .then(res => this.setState({ userData: res.data }))
      .catch(err => console.log(err));
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

  

  handleFormSubmitRegister = event => {
    console.log("whoopsies");
    event.preventDefault();
    
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
          goToRegister={this.goToRegister}/>
      </div>
    );
  }
}

export default LoginHandler;

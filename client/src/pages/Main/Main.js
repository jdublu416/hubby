import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Settings from "../../components/Settings";
import WeatherAPI from "../../components/WeatherAPI";
import Button from "../../components/Button";
import Widget from "../../components/Widget";
import Calendar from "react-calendar";
import TwitterWidget from '../../components/TwitterWidget';
import "./Main.css";
import API from "../../util/API";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
  }
  state = {
    activeId: "",
    staticMode: false,
    activeWidgets: [Calendar, WeatherAPI, TwitterWidget]
  };

  componentDidMount = () => {
    this.setState({
      activeId: this.props.match.params.id
    });
  };

  // handleLogout= ()=>{

  // }

  handleBtnClick = event => {
    let newState = { ...this.state };
    newState.staticMode = eval(event.target.getAttribute("value"));
    this.setState({ ...newState });
    console.log("click handled");
    console.log(event);
    console.log(this.state.staticMode);
  };

  changeSettings = activeId => {
    console.log("cha cha cha changing");
    API.updateUserData({
      weatherAPIWidth: this.state.weatherAPIWidth,
      weatherAPIHeight: this.state.weatherAPIHeight,
      weatherAPIX: this.weatherAPIX,
      weatherAPIY: this.weatherAPIY,
      calendarWidth: this.calendarWidth,
      calendarHeight: this.calendarHeight,
      calendarX: this.calendarX,
      calendarY: this.calendarY
    })
      .then(activeId => this.props.history.push("/Main/:id"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div
        className="back"
        style={{ backgroundColor: "grey", position: "relative" }}
      >
        {this.state.activeWidgets.map((item, i) => (
          <Widget
            key={i}
            type={this.state.activeWidgets[i]}
            draggable={this.state.staticMode}
            resizable={this.state.staticMode == true ? false : true}
          />
        ))}
        <Button
          className="myBtn"
          value={this.state.staticMode === false ? true : false}
          onClick={this.handleBtnClick}
        >
          Toggle
        </Button>

        <Button className="myBtn" onClick={this.handleBtnClick}>
          Save Settings
        </Button>

        <DropdownButton title="Add Widgets" className="myBtn">
          <MenuItem eventKey="1">Calendar</MenuItem>
          <MenuItem eventKey="2">Weather</MenuItem>
          <MenuItem eventKey="3" active>Twitter</MenuItem>
        </DropdownButton>

        {/* <Button className="myBtn" onClick={this.handleBtnClick}>
          Add Widgets</Button> */}

        <Link to="/">
          <Button className="myBtn logout">Logout</Button>
        </Link>
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import Settings from "../../components/Settings";
import WeatherAPI from "../../components/WeatherAPI";
import Button from "../../components/Button";
import Widget from "../../components/Widget";
import Calendar from "react-calendar";
import TwitterWidget from "../../components/TwitterWidget";
import "./Main.css";
import API from "../../util/API";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Main extends Component {
  // Weather = WeatherAPI;
  constructor(props) {
    super(props);
    console.log(props.match.params.id);
  }
  state = {
    activeId: "",
    staticMode: false,
    activeWidgets: [],
    weatherAPIHeight: 333,
    weatherAPIWidth: 333,
    weatherAPIX: 333,
    weatherAPIY: 333,
    twitterHeight: 500,
    twitterWidth: 250,
    twitterX: 100,
    twitterY: 500,
    calendarHeight: 200,
    calendarWidth: 200,
    calendarX: 200,
    calendarY: 200,
  };

  handleWidgetAdd = event => {
    const val = event.target.getAttribute("value");

    if (val === "Twitter" && this.state.activeWidgets.indexOf(TwitterWidget) < 0) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(TwitterWidget);
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets,
      });
    } else if (
      val === "WeatherAPI" &&
      this.state.activeWidgets.indexOf(WeatherAPI) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(WeatherAPI);
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets,
      });
    } else if (
      val === "Calendar" &&
      this.state.activeWidgets.indexOf(Calendar) < 0
    ) {
      let newActiveWidgets = [...this.state.activeWidgets];
      newActiveWidgets.push(Calendar);
      console.log(newActiveWidgets);
      this.setState({
        activeWidgets: newActiveWidgets
      });
    }
  };

  componentDidMount = () => {
    this.setState({
      activeId: this.props.match.params.id
    });

    this.loadUserSettings();
    this.changeSettings(this.props.match.params.id);
  };

  handleBtnClick = event => {
    let newState = { ...this.state };
    newState.staticMode = eval(event.target.getAttribute("value"));
    this.setState({ ...newState });
    console.log("click handled");
    console.log(event);
    console.log(this.state.staticMode);
  };

  //   loadUserSettings = (res) => {
  //  console.log(res);
  //      this.setState({ userData: res.data });
  //      this.props.history.push('/Main/:id/' + res.data._id);
  //   }
  loadUserSettings = event => {
    // console.log(res);
    // event.preventDefault();
    API.getUserDataById(this.state.activeId)
      // .then(res => console.log(res.data[0]))
      .then(res => {
        console.log(res.data[0])
        let newState = {
          weatherAPIHeight: res.data[0].weatherAPIHeight,
          weatherAPIWidth: res.data[0].weatherAPIWidth
        }
        this.setState({ ...newState })
        //   if (this.state.password === res.data[0].password) {
        //     this.props.history.push("/Main/" + res.data[0]._id);
        //   } else {
        //     toast(<Msg />);
        //   }
        // })
      }).catch(err => console.log(err)
      );
    // this.setState({ userData: res.data });
  };



  loadWidgetSettings = activeId => {
    console.log("widget load instaciated");
    API.getUserDataById
  }

  widgetOnChangeHandler = event => {
    console.log("handling widget change")
    this.setState({

    })
  }

  changeSettings = activeId => {

    console.log("cha cha cha changing and id: " + activeId);

    API.updateUserData(activeId, {
      $set: {
        weatherAPIWidth: this.state.weatherAPIWidth,
        weatherAPIHeight: this.state.weatherAPIHeight,
        weatherAPIX: this.state.weatherAPIX,
        weatherAPIY: this.state.weatherAPIY,
        twitterWidth: this.state.twitterWidth,
        twitterHeight: this.state.twitterHeight,
        twitterX: this.state.twitterX,
        twitterY: this.state.twitterY,
        calendarWidth: this.state.calendarWidth,
        calendarHeight: this.state.calendarHeight,
        calendarX: this.state.calendarX,
        calendarY: this.state.calendarY,
      }
    }).then(console.log("through changesettings call"))
      // .then(activeId => this.props.history.push("/Main/:id"))
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
            height={
                i === this.state.activeWidgets.indexOf(WeatherAPI) ? this.state.weatherAPIHeight :
                i === this.state.activeWidgets.indexOf(TwitterWidget) ? this.state.twitterHeight :
                i === this.state.activeWidgets.indexOf(Calendar) ? this.state.calendarHeight : null}
            width={
                i === this.state.activeWidgets.indexOf(WeatherAPI) ? this.state.weatherAPIWidth :
                i === this.state.activeWidgets.indexOf(TwitterWidget) ? this.state.twitterWidth :
                i === this.state.activeWidgets.indexOf(Calendar) ? this.state.calendarWidth : null}
            x={
                i === this.state.activeWidgets.indexOf(WeatherAPI) ? this.state.weatherAPIX :
                i === this.state.activeWidgets.indexOf(TwitterWidget) ? this.state.twitterX :
                i === this.state.activeWidgets.indexOf(Calendar) ? this.state.calendarX : null}
            y={
                i === this.state.activeWidgets.indexOf(WeatherAPI) ? this.state.weatherAPIY :
                i === this.state.activeWidgets.indexOf(TwitterWidget) ? this.state.twitterY :
                i === this.state.activeWidgets.indexOf(Calendar) ? this.state.calendarY : null}
            draggable={this.state.staticMode}
            resizable={this.state.staticMode == true ? false : true}
            changeHandler={this.widgetOnChangeHandler}
          />
        ))}
        {/* <Button
          className="myBtn"
          value={this.state.staticMode === false ? true : false}
          onClick={this.handleBtnClick}
        >
          Toggle
        </Button> */}
        <Button className="myBtn" onClick={this.handleBtnClick}>
          Save Settings
        </Button>
        {/* <Button className="myBtn" onClick={this.handleBtnClick}>
          Add Widgets
        </Button> */}

        <DropdownButton className="myBtn" title="Add Widgets">
          <MenuItem
            eventKey="1"
            value="WeatherAPI"
            onClick={this.handleWidgetAdd}
          >
            Weather
          </MenuItem>
          <MenuItem
            eventKey="2"
            value="Calendar"
            onClick={this.handleWidgetAdd}
          >
            Calendar
          </MenuItem>

          <MenuItem
            eventKey="3"
            value="Twitter"
            onClick={this.handleWidgetAdd}
          >
            Twitter
          </MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

export default Main;

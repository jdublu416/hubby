import "./Widget.css";
import React, { Component } from 'react'
import Rnd from "react-rnd";
import API from "../../util/API";
// import WeatherAPI from "../WeatherAPI";
// import Calendar from "react-calendar";

// const movable = document.querySelector('#movable-box');

export default class Widget extends Component {
    state = {

        width: 305,
        height: 305,
        x: 100,
        y: 100,

    }

    componentDidMount(props) {
        console.log(this.props.height)
        this.setState({
            height: this.props.height,
            width: this.props.width,
            x: this.props.x,
            y: this.props.y
        })
    }

    componentDidUpdate = props => {

    }

    dataPusher = () => {
        let data = {};
        if (this.props.thisWidget === "WeatherAPI") {
            data = {
                weatherAPIHeight: this.state.height,
                weatherAPIWidth: this.state.width,
                weatherAPIX: this.state.x,
                weatherAPIY: this.state.y,
            }
            console.log("inside widget weather")
        } else if (this.props.thisWidget === "TwitterWidget") {
            data = {
                twitterHeight: this.state.height,
                twitterWidth: this.state.width,
                twitterX: this.state.x,
                twitterY: this.state.y,
            }
            console.log("inside widget twitter")
        } else if (this.props.thisWidget === "Calendar") {
            data = {
                calendarHeight: this.state.height,
                calendarWidth: this.state.width,
                calendarX: this.state.x,
                calendarY: this.state.y,
            }
            console.log("inside widget calender")
        } console.log("no match")
        console.log("before change handles: " + data.CalendarX)
        this.props.changeHandler(data);
    }

    upData = (width, height) => {

        API.updateUserData({


        })
            .then(console.log("saved"))
            .catch(err => console.log(err));
    };

    render = props => {

        return (

            <Rnd

                style
                size={{ width: this.state.width, height: this.state.height }}
                position={{ x: this.state.x, y: this.state.y }}
                onDragStop={(e, d) => { 
                    this.setState({ x: d.x, y: d.y });
                    this.dataPusher();
                    }}
                bounds={"window"}
                minWidth={200}
                minHeight={200}
                lockAspectRatio={false}
                onResize={(e, direction, ref, delta, position) => {
                    this.setState({
                        width: ref.offsetWidth,
                        height: ref.offsetHeight,
                        ...position,
                    });
                    this.dataPusher();
                }}
                disableDragging={this.props.draggable}


            >
                <div className="widget">
                    < this.props.type
                        style={{
                            width: this.state.width,
                            height: this.state.height
                        }}
                        width={this.state.width}
                        height={this.state.height}
                        x={this.state.x}
                        y={this.state.y}
                        id={this.state.activeId}
                        onChange={this.dataPusher}
                    />
                </div>
            </Rnd>
        )
    }
}

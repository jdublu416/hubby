import React, { Component } from 'react'
import API from "../../util/API.js";


export default class WeatherAPI extends Component {

    state = {
        temp: 0,
        condition: "null",
        location: "20112",
        high: 0,
        low: 0,

    }
    componentDidMount() {
        this.queryAPI(this.state.location)

    }

    tempCorrector = temp => {
        const result = ((temp - 273.15) * 1.8) + 32;
        return result;
    }

    queryAPI = () => {
        API.weatherSearch()
            // .then(res => this.setState({ results: res.response }))
            .then(res => {
                const k = res.data.main.temp;
                const f = parseInt(this.tempCorrector(k));
                const temp = parseInt(f);
                const condition = res.data.weather[0].main;
                const high = parseInt(this.tempCorrector(res.data.main.temp_max));
                const low = parseInt(this.tempCorrector(res.data.main.temp_min));
                    console.log(temp);
                this.setState({ 
                    temp: temp,
                    condition: condition,
                    high: high,
                    low: low
                });
                console.log(condition);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment >
                {/* image src is hard coded to help test the appearance */}
                <img src="http://www.iconarchive.com/download/i89287/icons8/ios7/Weather-Partly-Cloudy-Rain.ico"  style={{maxHeight: "35%", maxWidth: "35%", margin: "5% 5% 0% 5%", border: "1px solid black"}}/>
                <h1 id="current-temp " style={{textAlign: "center", fontSize: 36, margin: "5% 5% 0% 5%", padding: ".25em",  border: "1px solid black", float: "right", maxWidth: "35%"}}> {this.state.temp} &deg;F</h1>
                <h2 id="condition"  style={{textAlign: "left", marginLeft: "5%"}}> {this.state.condition} </h2>
                <p id="high-temp" style={{ float: "left", padding: "0 1em",}}> High : {this.state.high} &deg;F</p>
                <p id="low-temp" style ={{ float: "right",padding: "0 1em",}}> Low: {this.state.low} &deg;F</p>
            </React.Fragment>
        )
    }
}

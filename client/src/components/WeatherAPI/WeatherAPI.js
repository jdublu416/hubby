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
            <React.Fragment>
                <h1 id="current-temp"> {this.state.temp} &deg;F</h1>
                <h2 id="condition"> {this.state.condition} </h2>
                <p id="high-temp"> High : {this.state.high} &deg;F</p>
                <p id="low-temp"> Low: {this.state.low} &deg;F</p>
            </React.Fragment>
        )
    }
}

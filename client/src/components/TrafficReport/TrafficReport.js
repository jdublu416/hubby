import React, { Component } from 'react'
import API from "../../util/API.js";



export default class TrafficReport extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };
    componentDidMount(props) {
        this.queryAPI(this.state.location)

    }

    queryAPI = query => {
        API.trafficSearch(query)
            .then(res => {
                console.log( "traffic widg: " + res);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment >
                <div>
                    {/* {this.state.activeWidgets.map((item, i) => (
                        <p
                            key={i}
                            type={this.state.activeWidgets[i]}></p>
                    )} */}
            </div>
            </React.Fragment>
        )
    }
}

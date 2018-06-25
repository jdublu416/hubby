import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Interactable from "../../components/Interactable";
import Widget from "../../components/Widget";


class Home extends Component {

    state = {

    };



    render() {
        return(
        <React.Fragment>
            <Widget />

            <i class="material-icons">mail_outline</i>

            <div class="fixed-action-btn">
                <a class="btn-floating btn-large grey darken-3">
                    <i class="large material-icons">settings</i>
                </a>
                <ul>
                    <li>
                        <button class="btn-floating red">
                            Color
                </button>
                    </li>
                    <li>
                        <button class="btn-floating green">
                            Add
                </button>
                    </li>
                    <li>
                        <button class="btn-floating blue">
                            Edit
                </button>
                    </li>
                </ul>
            </div>
        </React.Fragment>
        )
    }
}

export default Home;
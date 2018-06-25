import "./Widget.css";
import React, { Component } from 'react'

const  movable = document.querySelector('#movable-box');

export default class Widget extends Component {
    state = {

    }



render() {
    return (
        <React.Fragment>
            <a href="https://www.google.com/">
                <div className="widget">

                    <h1>Test Porps</h1>
                    <p>this widget takes you to google</p>
                </div>
            </a>
        </React.Fragment>
    )
}
}

import "./Widget.css";
import React, { Component } from 'react'
import Rnd from "react-rnd";
const movable = document.querySelector('#movable-box');

export default class Widget extends Component {
    state = {
        width: 100,
        height: 100,
        x: 100,
        y: 100,

    }



    render() {
        return (
            <React.Fragment>
                {/* <a href="https://www.google.com/"> */}
                    <Rnd
                        size={{ width: this.state.width, height: this.state.height }}
                        position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                        onResize={(e, direction, ref, delta, position) => {
                            this.setState({
                                width: ref.style.width,
                                height: ref.style.height,
                                ...position,
                            });
                        }}
                    >
                        <div className="widget">
                            <img src="http://www.funnyordie.com/thumbnails/576e2b3db6/fullsize" />
                            {/* <h1>Test Porps</h1>
                            <p>this widget takes you to google</p> */}
                        </div>
                    </Rnd>
                {/* </a> */}

            </React.Fragment>
        )
    }
}

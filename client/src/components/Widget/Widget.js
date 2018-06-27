import "./Widget.css";
import React, { Component } from 'react'
import Rnd from "react-rnd";
const movable = document.querySelector('#movable-box');

export default class Widget extends Component {
    state = {
        width: 300,
        height: 200,
        x: 100,
        y: 100,
    }



    render() {
        return (

                <Rnd

                    style
                    size={{ width: this.state.width, height: this.state.height }}
                    position={{ x: this.state.x, y: this.state.y }}
                    onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                    bounds={ "window" }
                    minWidth={ 300 }
                    minHeight={ 200 }
                    lockAspectRatio={ true }
                    onResize={(e, direction, ref, delta, position) => {
                        this.setState({
                            width: ref.offsetWidth,
                            height: ref.offsetHeight,
                            ...position,
                        });
                    }}
                >
                    <div className="widget">
                        {/* <img src="http://www.funnyordie.com/thumbnails/576e2b3db6/fullsize" /> */}
                        <h1
                            style={{ opacity: 1, }}
                        >
                            Test Porps
                            </h1>
                        <p>this widget takes you to google</p>
                    </div>
                </Rnd>
        )
    }
}

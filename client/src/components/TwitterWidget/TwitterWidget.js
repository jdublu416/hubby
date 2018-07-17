import React, { Component } from 'react';
import API from "../../util/API.js";
import "./TwitterWidget.css";


const TwitterWidget = props => (

            <div style={{ margin: ".75em" }}>
                <a class="twitter-timeline"
                    href="https://twitter.com/neiltyson?ref_src=twsrc%5Etfw"
                    data-width="600"
                    data-height="600"                
                    style={{ margin: ".5em" }}
                    data-chrome="nofooter"
                >
                </a>
            </div>
)



export default TwitterWidget;

// href="https://twitter.com/neiltyson?ref_src=twsrc%5Etfw" 
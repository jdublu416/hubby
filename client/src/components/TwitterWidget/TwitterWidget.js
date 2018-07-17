import React, { Component } from 'react';
import API from "../../util/API.js";
import { Timeline } from 'react-twitter-widgets'
import "./TwitterWidget.css";


const TwitterWidget = props => (

    <div style={{ margin: "1.25em" }}>
        <Timeline
        style={{pointerEvents: "none"}}
            dataSource={{
                sourceType: 'profile',
                screenName: 'neiltyson'
            }}
            options={{
                username: 'neiltyson',
                height: 500
            }}
            onLoad={() => console.log('Timeline is loaded!')}
        />
        {/* <a class="twitter-timeline"
                    href="https://twitter.com/neiltyson?ref_src=twsrc%5Etfw"
                    data-width="600"
                    data-height="600"                
                    style={{ margin: ".5em" }}
                    data-chrome="nofooter"
                >
                </a> */}
    </div>
)



export default TwitterWidget;

// href="https://twitter.com/neiltyson?ref_src=twsrc%5Etfw" 
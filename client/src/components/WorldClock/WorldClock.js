import React, { Component }  from 'react';
import Clock from 'react-live-clock';
 
const WorldClock = props =>  (

        <div
        style={{padding: "20%", textAlign: "center",}}>

            <h4>Home:</h4>
            <h5>
            <Clock format={'dddd, MMMM DD '} timezone={'US/Eastern'} />
            </h5>
            <h5>
            <Clock format={' HH:mm a'} ticking={true} timezone={'US/Eastern'} />
            </h5>
            <h4>Japan:</h4>
            <h5>
            <Clock format={'dddd, MMMM DD '} timezone={'Asia/Tokyo'} />
            </h5>
            <h5>
            <Clock format={' HH:mm a'} ticking={true} timezone={'Asia/Tokyo'} />
            </h5>
        </div>
        )

export default WorldClock;
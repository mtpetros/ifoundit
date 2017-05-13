import React from 'react';


import Map from './children/Map.js';
import Inout from './children/Inout.js';

export default class Main extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="column">
                    <div className="map-container col-md-8 col-md-offset-2">
                        <Map />
                    </div>
                    <div className="info-container col-md-8 col-md-offset-2">
                        <Inout />
                    </div>
                </div>
            </div>
        );
    }
}
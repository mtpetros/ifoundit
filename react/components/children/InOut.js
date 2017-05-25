import {
  default as React,
  Component,
} from "react";

import GetMarker from "./grandchildren/GetMarker.js";
import PostMarker from "./grandchildren/PostMarker.js";

// import Map from './Map.js';

export default class Inout extends Component {
    state = {
        info: {
            key: 11111,
            desc: "",
            location: {
                street: "",
                city: "Charlotte",
                state: "NC",
                zip: 11111
            },
            found: false,
            foundBy: "",
            finderContact: "none provided",
            lostBy: "",
            loserContact: "none provided"
        }
    };   

    render() {
        return (
            <div className="info-container col-md-8 col-md-offset-2">
                <div className="row">                    
                    <div className="col-md-4 col-md-offset-1">
                        <PostMarker newMarker={this.props.newMarker} newMarkerInfo={this.props.newMarkerInfo} resetMarkerSubmitted={this.props.resetMarkerSubmitted} markerSubmitted={this.props.markerSubmitted} submitUpdate={this.props.submitUpdate}/>
                    </div>
                    <div className="col-md-4 col-md-offset-2">    
                        
                            <GetMarker getMarkerInfo={this.props.getMarkerInfo} />
                        
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <button type="button" className="btn btn-primary btn-block disabled">leave a message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

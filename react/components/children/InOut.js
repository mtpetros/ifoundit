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
                        {/*<div className="row">
                            <div className="col-md-4 col-md-offset-1">
                                <button type="button" className="btn btn-primary btn-block">I Found It!</button>
                            </div>
                            <div className="col-md-4 col-md-offset-2">
                                <button type="button" className="btn btn-primary btn-block">I Lost It!</button>
                            </div>
                        </div>*/}
                    </div>
                    <div className="col-md-4 col-md-offset-2">    
                        <form>
                            <GetMarker getMarkerInfo={this.props.getMarkerInfo} />
                        </form>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <button type="button" className="btn btn-primary btn-block">Claim It!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

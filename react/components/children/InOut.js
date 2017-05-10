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
                <div className="row text-center">
                    <div className="col-md-3 col-md-offset-3">
                        <button type="button" className="btn btn-primary btn-lg">I Found It!</button>
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn btn-primary btn-lg">I Lost It!</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">    
                        <form className="text-center">
                            <GetMarker getMarkerInfo={this.props.getMarkerInfo} />
                        </form>
                    </div>
                    <div className="col-md-5 col-md-offset-2">
                        <form>
                            <PostMarker getInitial={this.props.getInitial} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
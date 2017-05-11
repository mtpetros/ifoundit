import {
  default as React,
  Component,
} from "react";

export default class GetMarker extends Component {
    render() {
        let result = null;
        if (this.props.getMarkerInfo.location) {
            result = this.props.getMarkerInfo.location.city;
        } else {
            result = "Click a marker to see the related info."
        }
        return(
            <div>
                <label htmlFor="info">info</label>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {result}
                    </div>
                </div>
            </div>
        );
    }
}
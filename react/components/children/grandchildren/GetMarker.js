import {
  default as React,
  Component,
} from "react";

export default class GetMarker extends Component {
    render() {
        let markerInfo = this.props.getMarkerInfo;
        let displayedMarker = {};
        if (markerInfo) {
            return(
                <div>
                    <label htmlFor="info">info</label>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <p>description: {markerInfo.desc}</p>
                            <p>street: {markerInfo.street}</p>
                            <p>city: {markerInfo.city}</p>
                            <p>state: {markerInfo.state}</p>
                            <p>zip: {markerInfo.zip}</p>
                            <p>name: {markerInfo.name}</p>
                            <p>contact: {markerInfo.contact}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div>
                    <label htmlFor="info">info</label>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <p>Click a marker to see its related info.</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
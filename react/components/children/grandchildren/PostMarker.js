import {
  default as React,
  Component,
} from "react";

export default class PostMarker extends Component {
    render() {
        let markerDesc = null,
        markerStreet = null,
        markerCity = null,
        markerState = null,
        markerZip = null,
        markerFoundBy = null,
        markerFinderContact = null;
        if (this.props.getInitial.info) {
            markerDesc = <input type="text" className="form-control" value={this.props.getInitial.info.desc}></input>;
            markerStreet = <input type="text" className="form-control" value={this.props.getInitial.info.location.street}></input>;
            markerCity = <input type="text" className="form-control" value={this.props.getInitial.info.location.city}></input>;
            markerState = <input type="text" className="form-control" value={this.props.getInitial.info.location.state}></input>;
            markerZip = <input type="text" className="form-control" value={this.props.getInitial.info.location.zip}></input>;
            markerFoundLostBy = <input type="text" className="form-control" value={this.props.getInitial.info.foundBy}></input>;
            markerContact = <input type="text" className="form-control" value={this.props.getInitial.info.finderContact}></input>;
        } else {
            markerDesc = <input className="form-control" type="text"></input>;
            markerStreet = <input className="form-control" type="text"></input>;
            markerCity = <input className="form-control" type="text"></input>;
            markerState = <input className="form-control" type="text"></input>;
            markerZip = <input className="form-control" type="text"></input>;
            markerFoundLostBy = <input className="form-control" type="text"></input>;
            markerContact = <input className="form-control" type="text"></input>;
        }

        return (
            <div className="form-group">
                <div><label htmlFor="description">description</label>{markerDesc} </div>
                <div><label htmlFor="street">street</label>{markerStreet} </div>
                <div><label htmlFor="city">city</label>{markerCity} </div>
                <div><label htmlFor="state">state</label>{markerState} </div>
                <div><label htmlFor="zip">zip</label>{markerZip} </div>
                <div>{markerFoundLostBy} </div>
                <div>{markerContact} </div>
            </div>
        );
    }
}
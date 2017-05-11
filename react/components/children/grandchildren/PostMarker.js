import {
  default as React,
  Component,
} from "react";

export default class PostMarker extends Component {
    state = {        
        desc: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        name: "",
        contact: ""        
    };

handleChange = this.handleChange.bind(this);

// handleChange(event) {
//     // let formProperty = this.state.form[event.target.id];
//     this.setState({ bob: event.target.value });
// }

// handleChange(event) {
//     // let formProperty = this.state.form[event.target.id];
//     let key = event.target.id,
//     val = event.target.value;
//     this.setState({ form: { ...this.state.form, key: val } });
//     // this.setState({ bob: event.target.value });
// }

handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    // alternatively using template strings for strings
    // this.setState({ [`key${event.target.id}`]: event.target.value });
}

    render() {
        // let markerDesc = null,
        // markerStreet = null,
        // markerCity = null,
        // markerState = null,
        // markerZip = null,
        // markerFoundLostBy = null,
        // markerContact = null;
        // if (this.props.getInitial.info && this.props.newMarker) {
        //     markerDesc = this.props.getInitial.info.desc;
        //     markerStreet = this.props.getInitial.info.location.street;
        //     markerCity = this.props.getInitial.info.location.city;
        //     markerState = this.props.getInitial.info.location.state;
        //     markerZip = this.props.getInitial.info.location.zip;
        //     markerFoundLostBy = this.props.getInitial.info.foundBy;
        //     markerContact = this.props.getInitial.info.finderContact;
        // } else {
        //     markerDesc = "";
        //     markerStreet = "";
        //     markerCity = "";
        //     markerState = "";
        //     markerZip = "";
        //     markerFoundLostBy = "";
        //     markerContact = "";
        // }

        return (
            <div className="form-group">
                <div><label htmlFor="description">description</label><input type="text" className="form-control" id="desc" value={this.state.desc} onChange={this.handleChange} required></input> </div>
                <div><label htmlFor="street">street</label><input type="text" className="form-control" id="street" value={this.state.street} onChange={this.handleChange}></input> </div>
                <div><label htmlFor="city">city</label><input type="text" className="form-control" id="city" value={this.state.city} onChange={this.handleChange}></input> </div>
                <div><label htmlFor="state">state</label><input type="text" className="form-control" id="state" value={this.state.state} onChange={this.handleChange}></input> </div>
                <div><label htmlFor="zip">zip</label><input type="text" className="form-control" id="zip" value={this.state.zip} onChange={this.handleChange}></input> </div>
                <div><label htmlFor="name">name</label><input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleChange}></input> </div>
                <div><label htmlFor="contact">contact</label><input type="text" className="form-control" id="contact" value={this.state.contact} onChange={this.handleChange}></input> </div>
            </div>
        );
    }
}
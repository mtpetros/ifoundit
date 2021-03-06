import {
  default as React,
  Component,
} from "react";

var helper = require('../../../helpers.js');



export default class PostMarker extends Component {
    state = {
        lostOrFound: "",
        desc: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        name: "",
        contact: "",   
    };

handleChange = this.handleChange.bind(this);
handleChangeRadio = this.handleChangeRadio.bind(this);
formSubmit = this.formSubmit.bind(this);

handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
}

handleChangeRadio(event) {
    this.setState({ [event.target.name]: event.target.value });
}

formSubmit(event) {
    event.preventDefault();    
    this.props.resetMarkerSubmitted(true);
    helper.postMarker(this.props.newMarkerInfo, this.state)
    .then(function(response) {
            console.log(response);

            helper.getMarker()
                .then(function(response) {
                console.log(response.data);
                if (response.data.length > 0) {
                    console.log("markers retrieved!");
                    this.props.submitUpdate(response.data);
                } else {
                    console.log("You don\'t have any markers saved in the DB!");
                }
            }.bind(this))
            
            this.setState({
                desc: "",
                street: "",
                city: "",
                state: "",
                zip: "",
                name: "",
                contact: ""        
            });
    }.bind(this))
    .catch(function (error) {
            console.log(error);
    }.bind(this));    
}





    render() {
        let lOrF = null;
            if (this.state.lostOrFound === "loser") {
                lOrF = "I Lost It!";
            } else if (this.state.lostOrFound === "finder") {
                lOrF = "I Found It!";
            } else {
                lOrF = "Lost or Found?";
            }

        let submitButton = null;
        let submitInfo = null;
            if (this.props.markerSubmitted) {
                submitButton = <button type="submit" className="btn btn-primary btn-block" disabled="true">{lOrF}</button>;
                submitInfo = <p className="text-center" style={{color: 'red'}}>Please place a marker before submitting!</p>;
            } else {
                submitButton = <button type="submit" className="btn btn-primary btn-block">{lOrF}</button>;
                submitInfo = null;
            }

        return (
            <form  onSubmit={this.formSubmit}>
                <div className="form-group">
                    <div><label htmlFor="description">description</label><input type="text" className="form-control" id="desc" value={this.state.desc} onChange={this.handleChange} required /> </div>
                    <div><label htmlFor="street">street</label><input type="text" className="form-control" id="street" value={this.state.street} onChange={this.handleChange} /> </div>
                    <div><label htmlFor="city">city</label><input type="text" className="form-control" id="city" value={this.state.city} onChange={this.handleChange} /> </div>
                    <div><label htmlFor="state">state</label><input type="text" className="form-control" id="state" value={this.state.state} onChange={this.handleChange} /> </div>
                    <div><label htmlFor="zip">zip</label><input type="text" className="form-control" id="zip" value={this.state.zip} onChange={this.handleChange} /> </div>
                    <div><label htmlFor="name">name</label><input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} /> </div>
                    <div><label htmlFor="contact">contact</label><input type="text" className="form-control" id="contact" value={this.state.contact} onChange={this.handleChange} /> </div>
                    <div className="radio-choice text-center">
                        <div className="form-check radio-inline"><label className="form-check-label"><input type="radio" className="form-check-input" name="lostOrFound" id="finder" value="finder" onChange={this.handleChangeRadio} />I Found It!</label></div>
                        <div className="form-check radio-inline"><label className="form-check-label"><input type="radio" className="form-check-input" name="lostOrFound" id="loser" value="loser" onChange={this.handleChangeRadio} />I Lost It!</label></div>
                    </div>
                </div>
                {submitButton}
                {submitInfo}
            </form>
        );
    }
}
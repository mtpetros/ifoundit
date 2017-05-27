/* global google */
import _ from "lodash";

import {
  default as React,
  Component,
} from "react";


import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import Navbar from './children/Navbar.js';
import Inout from './children/InOut.js';

var helper = require('../helpers.js');

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={11}
    defaultCenter={{ lat: 35.2271, lng: -80.8431 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
        onClick={()=> props.getMarkerInfo(marker)}
      />
    ))}
  </GoogleMap>
));

export default class MapMain extends Component {

  state = {
    markers: [{
      position: {
        lat: 25.0112183,
        lng: 21.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
      desc: "",
      street: "",
      city: "",
      state: "",
      zip: 11111,
      claimed: false,
      name: "",
      contact: "none provided"
    }],
    markerInfo: "",
    newMarker: false,
    newMarkerInfo: undefined,
    markerSubmitted: true
  };
  componentDidMount = this.componentDidMount.bind(this);
  handleMapLoad = this.handleMapLoad.bind(this);
  handleMarkerInfo = this.handleMarkerInfo.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  resetMarkerSubmitted = this.resetMarkerSubmitted.bind(this);
  handleUpdateMarkersOnSubmit = this.handleUpdateMarkersOnSubmit.bind(this);

  componentDidMount() { 
    helper.getMarker()
    .then(function(response) {
      console.log(response.data);
      if (response.data.length > 0) {
        this.setState({markers: response.data})
      } else {
        console.log("You don\'t have any markers saved in the DB!");
      }
    }.bind(this))
    .catch(function(error) {
      console.log(error);
    }.bind(this));
  }


  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }



  handleMarkerInfo(targetMarker) {
    this.setState({ markerInfo: targetMarker});
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    if (this.state.markerSubmitted) {
      const nextMarkers = [
        ...this.state.markers,
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
          lostOrFound: "",
          desc: "",
          street: "",
          city: "",
          state: "",
          zip: 11111,
          claimed: false,
          name: "",
          contact: "none provided"      
        },
      ];
      this.setState({
        markers: nextMarkers,
        newMarker: true,
        newMarkerInfo: nextMarkers[nextMarkers.length - 1],
        markerSubmitted: false
      });
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    if (!targetMarker._id) {
      const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
      this.setState({
        markers: nextMarkers,
        markerSubmitted: true
      });
    } else {
      console.log("This marker has already been submitted!");
    }
  }

  handleUpdateMarkersOnSubmit(markers) {
    this.setState({markers: markers});
  }

  resetMarkerSubmitted(submitted) {
    this.setState({markerSubmitted: submitted});
  }

  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="map-container col-md-8 col-md-offset-2">
          <div style={{height: `100%`}}>

            <GettingStartedGoogleMap
              containerElement={
                <div style={{ height: `100%` }} />
              }
              mapElement={
                <div style={{ height: `100%` }} />
              }
              onMapLoad={this.handleMapLoad}
              onMapClick={this.handleMapClick}
              markers={this.state.markers}
              getMarkerInfo={this.handleMarkerInfo}
              onMarkerRightClick={this.handleMarkerRightClick}
            />
          </div>
        </div>
        
          <Inout getMarkerInfo={this.state.markerInfo} newMarker={this.state.newMarker} newMarkerInfo={this.state.newMarkerInfo} resetMarkerSubmitted={this.resetMarkerSubmitted} markerSubmitted={this.state.markerSubmitted} submitUpdate={this.handleUpdateMarkersOnSubmit}/>
        
      </div>
    </div>
    );
  }
}
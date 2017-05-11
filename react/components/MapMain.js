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
      info: {
            desc: "",
            street: "",
            city: "",
            state: "",
            zip: 11111,
            found: false,
            name: "",
            contact: "none provided"
        },
    }],
    displayedInfo: "",
    newMarker: false,
  };

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMarkerInfo = this.handleMarkerInfo.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);


  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }



  handleMarkerInfo(targetMarker) {
    this.setState({ displayedInfo: targetMarker.info});
    console.log(this.state.displayedInfo);
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        info: {
            desc: "",
            street: "",
            city: "",
            state: "",
            zip: 11111,
            found: false,
            name: "",
            contact: "none provided"
        } 
      },
    ];
    this.setState({
      markers: nextMarkers,
      newMarker: true
    });
    console.log(this.state);
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
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
        
          <Inout getInitial={this.state.markers[this.state.markers.length - 1]} getMarkerInfo={this.state.displayedInfo} newMarker={this.state.newMarker} />
        
      </div>
    </div>
    );
  }
}
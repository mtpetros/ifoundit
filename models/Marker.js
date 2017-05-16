var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var position = new Schema({
  lat: {
    type: Number
  },
  lng: {
    type: Number
  }
});

var MarkerSchema = new Schema({
  key: {
    type: Number
  },
  defaultAnimation: {
    type: Number
  },
  lostOrFound: {
    type: String
  },
  desc: {
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: Number
  },
  position: position,//{
    
    // lat: {
    //   type: Number
    // },
    // lng: {
    //   type: Number
    // }
  // },
  claimed: {
    type: Boolean,
    default: false
  },
  name: {
    type: String
  },
  contact: {
    type: String
  }
});

var Marker = mongoose.model("Marker", MarkerSchema);
module.exports = Marker;
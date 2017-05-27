var mongoose = require('mongoose');
// var Marker = require('./Marker.js');
var Schema = mongoose.Schema;
 
var MessageSchema = new Schema({
    user: String,
    message: String,
    marker_id: Number
}, {
    timestamps: true
});

var Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
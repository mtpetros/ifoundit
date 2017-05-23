var axios = require("axios");


module.exports = {
    postMarker: function(markerProps, markerState) {
        return axios.post("/markers", { key: markerProps.key, defaultAnimation: 2, position: {lat: markerProps.position.lat(), lng: markerProps.position.lng()}, lostOrFound: markerState.lostOrFound, desc: markerState.desc, street: markerState.street, city: markerState.city, state: markerState.state, zip: markerState.zip, name: markerState.name, contact: markerState.contact });
    },

    getMarker: function() {
        return axios.get("/markers");        
    }
}


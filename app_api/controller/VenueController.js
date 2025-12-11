var mongoose = require('mongoose');
var Venue = mongoose.model('venue');

const createResponse = function(res, status, content) {
    res.status(status).json(content);
}

const listVenues = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}

const getVenue = async function(req, res) {

    try {
        await Venue.findById(req.params.venueid).exec().then(function(venue) {
            console.log(venue);
            createResponse(res, 200, venue);
        });


    } catch (err) {
        createResponse(res, 404, {"error": "Venue not found"});

    }
}
 const addVenue =  async function(req, res) {
    createResponse(res, 200, {"status": "API is running"}); 


   // createResponse(res, 200, {"status": "API is running"});
}



const updateVenue = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}

const deleteVenue = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}
module.exports = {
    listVenues,
    addVenue,
    getVenue,
    updateVenue,
    deleteVenue
}
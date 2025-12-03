var mongoose = require('mongoose');
var Venue = mongoose.model('venue');

const createResponse = function(res, status, content) {
    res.status(status).json(content);
}

const listVenues = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}

const addVenue = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}

const getVenue = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
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
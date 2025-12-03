var mongoose = require('mongoose');
var Venue = mongoose.model('venue');

const createResponse = function(res, status, content) {
    res.status(status).json(content);
}


const addComment = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}

const getComment = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}

const updateComment = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}

const deleteComment = function(req, res) {
    createResponse(res, 200, {"status": "API is running"});
}

module.exports = {
    addComment,
    getComment,
    updateComment,
    deleteComment
}
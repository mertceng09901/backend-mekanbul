var express = require('express');
/*const { createElement } = require('react');*/
var router = express.Router();
var ctrlVenues = require('../controller/VenueController');
var ctrlComments = require('../controller/CommentController');

router
.route('/venues')
.get(ctrlVenues.listVenues)
.post(ctrlVenues.addVenue);

router
.route('/venues/:venueid')
.get(ctrlVenues.getVenue)
.put(ctrlVenues.updateVenue)
.delete(ctrlVenues.deleteVenue);

router
.route('/venues/:venueid/comments')
.post(ctrlComments.addComment);

router
.route('/venues/:venueid/comments/:commentid')
.get(ctrlComments.getComment)
.put(ctrlComments.updateComment)
.delete(ctrlComments.deleteComment);

module.exports = router;
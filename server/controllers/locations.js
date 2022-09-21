
var express = require('express');
var router = express.Router();
var Location = require("../models/locations");
var Walker = require("../models/walkers") 
var DogOwners = require("../models/dogowners");

//CREATE LOCATION FOR WALKER
router.post('/api/walkers/:walker_id/locations', function(req, res, next) {
    const walker_id = req.params.walker_id;
    Walker.findById(walker_id, function(err, walker) {
        if (err) { return next(err); }
        if(walker === null){
            return res.status(404).json({'message':'Walker not found!'});
        }
        var location = new Location(req.body);
        location.walker= walker_id;
        location.save()
        .then(respond => {res.status(200).json(respond)})
    })
});

// GET ALL LOCATIONS
router.get('/api/walkers/:walker_id/locations', function(req, res, next) {
    const walker_id = req.params.walker_id;
    Location.find({walker: {$eq:walker_id}}, function(err, locations) { 
        if (err) { return next(err); }
        if(locations == null){
            return res.status(404).json({'message':'Locations empty!'});
        }
        {res.status(200).json({'locations':locations})}
    })
});

// GET ONE LOCATION
router.get('/api/walkers/:walker_id/locations/:location_id', function(req, res, next) {
    const location_id = req.params.location_id;
    Location.findById(location_id, function(err, location) { 
        if (err) { return next(err); }
        if(location == null){
            return res.status(404).json({'message':'Location not found!'});
        }
        {res.status(200).json(location)}
    })
});

// DELETE ONE LOCATION
router.delete('/api/walkers/:walker_id/locations/:location_id', function(req, res, next) {
    const location_id = req.params.location_id;
    Location.findOneAndDelete({_id:location_id}, function(err, location) { 
        if (err) { return next(err); }
        if(location == null){
            return res.status(404).json({'message':'Location not found!'});
        }
        {res.status(200).json(location)}
    })
});

// DELETE ONE LOCATION FOR OWNER
router.delete('/api/dogowners/:dogowner_id/locations/:location_id', function(req, res, next) {
    const location_id = req.params.location_id;
    Location.findOneAndDelete({_id:location_id}, function(err, location) { 
        if (err) { return next(err); }
        if(location == null){
            return res.status(404).json({'message':'Location not found!'});
        }
        {res.status(200).json(location)}
    })
});

module.exports = router;
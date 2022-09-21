var express = require('express');
var router = express.Router();
var Walker = require('../models/walkers');

//post walker
router.post('/api/walkers', function (req, res, next) {
    var walker = new Walker(req.body);
    walker.save(function(err, walker) {
        if (err) { return next(err); }
        console.log(walker)
        res.status(200).json(walker);
    });
});

// get all walkers
router.get('/api/walkers', (req, res, next) => {
    Walker.find()
      .exec()
      .then(allwalkers => {
        res.status(200).json(allwalkers);
      })
      .catch(err => {
        res.status(500).json({
          message: "Error occured"
        });
      });
  });

//Get walker with the given ID
router.get('/api/walkers/:walker_id', function (req, res, next) {
    const walker_id = req.params.walker_id;
    Walker.findById(walker_id, function(err, walker) {
        if (err) { return next(err); }
        if(walker_id === null) {
            return res.status(404).json({'message' : 'Walker not found!'});
        }
        res.status(200).json({'walker': walker});

    })
});

//Update walker using put
router.put('/api/walkers/:id', (req, res) => {
    var id = req.params.id; 
    var updates = req.body
    Walker.findByIdAndUpdate(id , updates, { new: true })
        .then(updatedwalker => res.status(200).json(updatedwalker))
        .catch(err => res.status(404).json("error:" + err))
});

//Update data using patch
router.patch('/api/walkers/:id', (req, res) => {
    const id = req.params.id;
 Walker.findById(id, function (err, walker) {
        if (err) { return res.status(500).json(err) }
        if (walker === null) {
            return res.status(404).json({ "message": "Walker not found!" });
        }
        walker.walker_firstname = (req.body.walker_firstname || walker.walker_firstname);
        walker.walker_lastname = (req.body.walker_lastname || walker.walker_lastname);
        walker.user_name = (req.body.user_name || walker.user_name);
        walker.walker_id = (req.body.walker_id || walker.walker_id);
        walker.charge = (req.body.charge || walker.charge);
        walker.description= (req.body.description || walker.description);
        walker.phone = (req.body.phone || walker.phone);
        walker.save();
        res.status(200).json(walker);
    })
})

//Delete walker with the given ID
router.delete('/api/walkers/:id', function (req, res, next) {
    var id = req.params.id;
 Walker.findOneAndDelete({ _id: id }, function (err, walkers) {
        if (err) {
            res.status(404).json({ 'message': 'Walker not found' });
        } else {
            return res.status(200).json({ 'message': 'Successfully deleted the walker' });
        }
    });
});

//Delete all walkers 
router.delete('/api/walkers', function (req, res, next) {
 Walker.deleteMany(function (err, walkers) {
        if (err) {
            return res.status(404).json({message: 'Walker not found' });
        }
        res.status(200).json({message: "Successfully deleted all walkers."});
    });
});

module.exports = router;

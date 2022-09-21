var express = require('express');
var router = express.Router();
var DogOwners = require("../models/dogowners");

//post
router.post('/api/dogowners', (req, res, next) => {
  var dogowners = new DogOwners({
    dog_owner_firstname: req.body.dog_owner_firstname,
    dog_owner_lastname: req.body.dog_owner_lastname,
    user_name: req.body.user_name,
    pets: req.body.pets,
    phone: req.body.phone,
    describe: req.body.describe
  });
  dogowners
    .save()
    .then(result => {
      res.status(200).json({
        message: "Created succesfully",
        createdOwner: result
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err,
      });

    });
});


//Get all
router.get('/api/dogowners', (req, res, next) => {
  DogOwners.find()
    .exec()
    .then(allOwners => {
      res.status(200).json(allOwners);
    })
    .catch(err => {
      res.status(500).json({
        message: " Error occured"
      });
    });
});

// get with filter and limit
router.get('/api/dogowners/filter', async (req, res) => {
  DogOwners.find()
    .where('wants_to_hire : /true/')
    .limit(2)
    .exec()
    .then(allOwners => {
      console.log(allOwners);
      res.status(200).json(allOwners);
    })
    .catch(err => {
      console.log(allOwners);
      res.status(500).json({
        Error: err
      });
    });

});

// get by id
router.get('/api/dogowners/:id', function (req, res, next) {
  var id = req.params.id; 
  DogOwners.findById(id, function(err, dogowner){
        if (err) { return next(err); }
        if(id === null) {
            return res.status(404).json({'message' : 'Owner not found!'});
        }
        res.status(200).json({'dogowner': dogowner});
  })
});

// get by id
router.get('/api/dogowners/:dogowner_id', function (req, res, next) {
  var dogowner_id = req.params.dogowner_id; 
  DogOwners.findById(dogowner_id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//Update walker using put
router.put('/api/dogowners/:id', (req, res) => {
  var id = req.params.id; 
  var updates = req.body
  DogOwners.findByIdAndUpdate(id , updates, { new: true })
      .then(updateddogowners => res.status(200).json(updateddogowners))
      .catch(err => res.status(404).json("error:" + err))
});

//delete by id
router.delete('/api/dogowners/:dogowner_id', function (req, res, next) {
  var id = req.params.id;
DogOwners.findOneAndDelete({ _id: id }, function (err, dogowners) {
      if (err) {
          res.status(404).json({ 'message': 'Owner not found' });
      } else{
          res.status(200).json({ 'message': 'Successfully deleted the owner' });
      }
  });
});

//Delete all owners 
router.delete('/api/dogowners', function (req, res, next) {
  DogOwners.deleteMany(function (err, dogowners) {
         if (err) {
             return res.status(404).json({message: 'Owners not found' });
         }
         res.status(200).json({message: "Successfully deleted all owners."});
     });
 });

module.exports = router;
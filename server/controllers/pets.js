var express = require('express');
var router = express.Router();
var Pet = require("../models/pets");
var DogOwner = require("../models/dogowners") 

//Postpets 
router.post('/api/dogowners/:dogowner_id/pets', function(req, res, next) {
  const dogowner_id = req.params.dogowner_id;
  DogOwner.findById(dogowner_id, function(err, dogowners) {
      if (err) { return next(err); }
      if(dogowners === null){
          return res.status(404).json({'message':'Owner not found!'});
      }
      var pet = new Pet(req.body);
      pet.dogowner= dogowner_id;
      pet.save()
      .then(respond => {res.status(200).json(respond)})
  })
});
  
// GET ALL PETS
router.get('/api/dogowners/:dogowner_id/pets', function(req, res, next) {
  const dogowner_id = req.params.dogowner_id;
  Pet.find({dogowner: {$eq:dogowner_id}}, function(err, pets) { 
      if (err) { return next(err); }
      if(pets == null){
          return res.status(404).json({'message':'Pets empty!'});
      }
      {res.status(200).json({'pets': pets})}
  })
});

  //get pets by id
router.get('/api/dogowners/:dogowner_id/pets/:pet_id', function (req, res, next) {
  const pet_id = req.params.pet_id;
  Pet.findById(pet_id, function(err, pet) { 
      if (err) { return next(err); }
      if(pet == null){
          return res.status(404).json({'message':'Pet not found!'});
      }
      {res.status(200).json(pet)}
  })
});

  //update by id
router.put('/api/dogowners/:dogowner_id/pets/:pet_id', (req, res) => {
  var pet_id = req.params.pet_id;
  Pet.findById({_id:pet_id}, function(err,pet){
    if(err){ return next(err);}
    if(pet === null){
      return res.status(400).json({"message":'Pet not found!'})
    }
    pet.pet_name = req.body.pet_name;
    pet.pet_breed = req.body.pet_breed;
    pet.pet_age = req.body.pet_age;
    pet.save();
    res.json(pet);
  })
})

  //delete by id 
router.delete('/api/dogowners/:dogowner_id/pets/:pet_id', (req, res, next) => {
  const pet_id = req.params.pet_id;
  Pet.findOneAndDelete({_id:pet_id}, function(err, pet) { 
      if (err) { return next(err); }
      if(pet == null){
          return res.status(404).json({'message':'Pet not found!'});
      }
      {res.status(200).json(pet)}
  })
});

module.exports = router;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var petSchema = new Schema({
    pet_name: { type: String },
    pet_breed: { type: String },
    pet_age:{ type: Number},
    dogowner: {
        type: Schema.Types.ObjectId,
        ref: 'dogowners'
    }
});

module.exports = mongoose.model('pets', petSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogownerSchema = new Schema({
    dog_owner_firstname: { type: String },
    dog_owner_lastname: { type: String },
    user_name: { type: String },
    describe: {type: String},
    phone: { type: Number },
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'pets' 
    }
});
module.exports = mongoose.model('dogowners',dogownerSchema);
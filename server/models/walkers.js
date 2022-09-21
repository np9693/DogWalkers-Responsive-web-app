var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var walkerSchema = new Schema ({
    walker_firstname: { type: String },
    walker_lastname: { type: String},
    user_name: {type: String},
    charge: {type: Number},
    phone : {type: Number},
    description: {type: String},
    location: {
        type: Schema.Types.ObjectId,
        ref: 'locations' 
    }
});

module.exports = mongoose.model('walkers',walkerSchema);

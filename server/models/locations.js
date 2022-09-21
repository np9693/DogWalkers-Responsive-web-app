var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema ({
    houseno: { type: Number },
    streetname:{type: String },
    city: {type: String},
    postalcode: {type: Number},
    walker: {
        type: Schema.Types.ObjectId,
        ref: 'walkers'
    },
    dogowner: {
        type: Schema.Types.ObjectId,
        ref: 'dogowners'
    }
});

module.exports = mongoose.model('locations',locationSchema);

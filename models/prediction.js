const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Prediction =  new Schema({
    name: {type: Schema.Types.ObjectId, ref: 'User'},
    home: {type: Number, required: true},
    away: {type: Number, required: true},
    group: {type: Number}
}, {
    timestamps: true
})

module.exports = mongoose.model('Prediction', Prediction);

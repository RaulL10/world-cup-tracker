const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Prediction =  new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    home: {type: Number, required: true},
    away: {type: Number, required: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('Prediction', Prediction);

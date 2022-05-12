const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Prediction =  new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    home: {type: Number, default: 1, required: true},
    away: {type: Number, default: 1, required: true}
})

module.exports = mongoose.model('Prediction', Prediction);

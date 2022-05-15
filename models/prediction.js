const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Prediction =  new Schema({
    home: {type: Number, required: true},
    away: {type: Number, required: true},
    name: {type: String},
    group: {type: Number},
    hometeam: {type: String},
    awayteam: {type:String}
}, {
    timestamps: true
})

module.exports = mongoose.model('Prediction', Prediction);

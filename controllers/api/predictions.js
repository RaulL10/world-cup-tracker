const Prediction = require('../../models/prediction')

module.exports = {
    create,
    index
}

async function create(req, res) {
    try {
        const prediction = await Prediction.create(req.body)
        console.log(req.body)
        res.json(prediction)
    } catch (err) {
        // client will chek for any non 200 code
        console.log(err)
        res.status(400).json(err) 
    }
}

async function index(req, res) {
    try {
        const predictions = await Prediction.find({})
        res.json(predictions)
    } catch(err) {
        console.log(err)
        res.status(400).json(err) 
    }
}
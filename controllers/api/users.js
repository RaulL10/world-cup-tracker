const User = '../../models/user'
const jwt = require('jsonwebtoken')


module.exports = {
    create
}

async function create(req, res) {
    try {
        // add ther user to the db
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (err) {
        // client will chek for any non 200 code
        res.status(400).json(err) 
    }
}

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }
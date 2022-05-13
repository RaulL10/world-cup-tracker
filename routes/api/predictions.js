const express = require('express');
const router = express.Router();
const predictionsCtrl = require('../../controllers/api/predictions');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');



// POST /api/users
router.get('/index', predictionsCtrl.index)
router.post('/', predictionsCtrl.create);


module.exports = router;
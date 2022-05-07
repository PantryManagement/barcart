const express = require('express');
const router = express.Router();

const universeController = require('../controllers/universeController');

router.get('/', universeController.getDrinks, (req, res) => {
  // do something with response
})


module.exports = router;
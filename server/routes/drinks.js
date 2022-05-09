const express = require('express');
const router = express.Router();

const drinksController = require('../controllers/drinksController');

router.get('/', drinksController.getDrinks, (req, res) => res.status(200).json(res.locals));


module.exports = router;
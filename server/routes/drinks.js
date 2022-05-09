const express = require('express');
const router = express.Router();

const universeController = require('../controllers/universeController');
const drinksController = require('../controllers/drinksController');

router.get('/', universeController.getDrinks, universeController.getIngredients, drinksController.calculateDrinks, (req, res) => res.status(200).json(res.locals));


module.exports = router;
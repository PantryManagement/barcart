const express = require('express');
const router = express.Router();

const universeController = require('../controllers/universeController');

router.get('/drinks', universeController.getDrinks, (req, res) => res.status(200).json(res.locals));
router.get('/ingredients', universeController.getIngredients, (req, res) => res.status(200).json(res.locals));


module.exports = router;
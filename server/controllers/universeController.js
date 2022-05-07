const db = require('../models/drinkModel');
const universeController = {};

universeController.getDrinks = (req, res, next) => {

  const queryString = 'SELECT * FROM drinks RETURNING *';

  db.query(queryString, parameters, callback);
}


module.exports = universeController;
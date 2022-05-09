const db = require('../models/drinkModel');
const universeController = {};

universeController.getDrinks = (req, res, next) => {
  const drinksQuery = 'SELECT * FROM drinks';

  db.query(drinksQuery)
    .then((data) => {
      res.locals.drinks = data.rows;
      return next();
    })
    .catch(error => next({
      log: 'universeController.getDrinks ERROR',
      message: {err: 'universeController.getDrinks ERROR'}
    }));
};


universeController.getIngredients = (req, res, next) => { 
  const ingredientsQuery = 'SELECT * FROM ingredients';

  db.query(ingredientsQuery)
    .then((data) => {
      res.locals.ingredients = data.rows;
      return next();
    })
    .catch(error => next({
      log: 'universeController.getIngredients ERROR',
      message: {err: 'universeController.getIngredients ERROR'}
    }));
};


module.exports = universeController;
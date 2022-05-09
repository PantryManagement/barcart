const db = require('../models/drinkModel');
const drinksController = {};

drinksController.getDrinks = (req, res, next) => {

  // query the database for the ingredients_in_drinks table with a column added for "ingredient" name, "in_stock" amount and for "drink" name

  const queryStr = 'SELECT ingredients_in_drinks._id, ingredients_in_drinks.drink_id, ingredients_in_drinks.ingredient_id, ingredients_in_drinks.quantity, ingredients.ingredient, ingredients.in_stock, drinks.drink FROM ingredients_in_drinks LEFT JOIN ingredients ON ingredients_in_drinks.ingredient_id=ingredients._id LEFT JOIN drinks ON ingredients_in_drinks.drink_id=drinks._id';

  db.query(queryStr)
  .then((data) => {
    let results = data.rows;
    let possible = {};

    for (let el of results) {
      let numDrinks = Math.floor(el.in_stock / el.quantity);
      let drinkName = el.drink;
      
      if (possible.hasOwnProperty(drinkName)) { 
        if (numDrinks < possible[drinkName]) {
          possible[drinkName] = numDrinks;
        }
      } else {
        possible[drinkName] = numDrinks;
      }
    }

    res.locals.drinks = possible;
    return next();

  })
  .catch(error => next({
    log: 'drinksController.getDrinks ERROR',
    message: {err: 'drinksController.getDrinks ERROR'}
  }));

};


module.exports = drinksController;
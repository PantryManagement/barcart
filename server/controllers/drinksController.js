const db = require('../models/drinkModel');
const drinksController = {};

drinksController.getDrinks = (req, res, next) => {

  // query the database for the ingredients_in_drinks table with columns added for "ingredient" name, "in_stock" amount and for "drink" name

  const queryStr = 'SELECT ingredients_in_drinks._id, ingredients_in_drinks.drink_id, ingredients_in_drinks.ingredient_id, ingredients_in_drinks.quantity, ingredients.ingredient, ingredients.in_stock, drinks.drink FROM ingredients_in_drinks LEFT JOIN ingredients ON ingredients_in_drinks.ingredient_id=ingredients._id LEFT JOIN drinks ON ingredients_in_drinks.drink_id=drinks._id';

  db.query(queryStr)
  .then((data) => {
    
    // data.rows is an array of objects; each object corresponds to a single drink/ingredient combo and includes the amount necessary to make the drink AND how much of that ingredient the user has in their inventory
    let results = data.rows;
    let possible = {};

    // iterate over ingredients for each drink, comparing "in_stock" to "quantity" needed for that drink
    for (let el of results) {
      // calculate how many drinks the user can make given their inventory of the current ingredient
      let numDrinks = Math.floor(el.in_stock / el.quantity);
      let drinkName = el.drink;
      
      // if drink already exists, update numDrinks only if current ingredient it is the "limiting factor"
      if (possible.hasOwnProperty(drinkName)) { 
        if (numDrinks < possible[drinkName]) {
          possible[drinkName] = numDrinks;
        }
      }
      // add drink to possible object if it does not currenly exist 
      else {
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
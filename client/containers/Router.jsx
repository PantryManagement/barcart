import React from "react";
import ShoppingListContainer from "./ShoppingListContainer.jsx";
import CocktailContainer from "./CocktailContainer.jsx";
import IngredientContainer from "./IngredientContainer.jsx";

// Routes and navigates users to the three main pages and their stateful containers
export default function Router() {
  return (
    <div className="router">
      <ShoppingListContainer />
      <CocktailContainer />
      <IngredientContainer />
    </div>
  );
}

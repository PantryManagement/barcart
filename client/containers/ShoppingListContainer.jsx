import React from "react";
import ShoppingList from "../components/ShoppingList.jsx";
/**
 * Future functionality for a simple todo list of ingredients the user needs to/ should buy.
 * Will add items manually, or by pressing a button on either a cocktail or next to an ingredient.
 * Should store in localhost/database after render or state change
 */
export default function ShoppingListContainer() {
  return (
    <div className="shopping-list-container">
      <ShoppingList />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import CocktailCardDeck from "../components/CocktailCardDeck.jsx";


/**
 * Stateful component that holds list of cocktails. Currently, set to all possible cocktails and in the future
 * should have a flag that makes one of two requests to the server.
 * 1. List of all cocktails
 * 2. List of possible cocktails based on user's bar inventory
 */
export default function CocktailContainer() {
  const [cocktailList, setCocktailList] = useState([]);
  useEffect(() => {
    const getCocktailData = async () => {
      const request = await fetch("api/universe/drinks");
      const drinks = await request.json();
      setCocktailList([...drinks.drinks]);
    };
    getCocktailData().catch(console.error);
  }, []);

  return (
    <div className="cocktail-container">
      <CocktailCardDeck cocktailList={cocktailList} />
    </div>
  );
}

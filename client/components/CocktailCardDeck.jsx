import React from "react";
import CocktailCard from "./CocktailCard.jsx";
import styles from "../scss/cocktaildeck.scss";

/**
 * Simply renders list of cocktails as cards
 */
export default function CocktailCardDeck(props) {
  console.log("props", props);
  return (
    <div className="cocktail-card-deck">
      {!props.cocktailList ? (
        <>loading...</>
      ) : (
        props.cocktailList.map((ele, i) => {
          return <CocktailCard key={i} cocktail={ele} />;
        })
      )}
    </div>
  );
}

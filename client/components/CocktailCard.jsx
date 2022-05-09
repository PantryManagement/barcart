import React from "react";
import styles from '../scss/cocktailCard.scss'

export default function CocktailCard(props) {
    
    return (
    <div className="cocktail-card">
        <h3>{props.cocktail.name}</h3>
    </div>
);
}

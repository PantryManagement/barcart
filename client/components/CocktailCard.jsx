import React from "react";
import styles from '../scss/cocktailcard.scss'

export default function CocktailCard(props) {
    
    return (
    
    <div className="cocktail-card">
        <div className="design-block">
            <p className='card-text card-name'>{props.cocktail.drink}</p>
        </div> 
        <p className='card-text card-flavor'><b>Flavor:</b> {props.cocktail.flavor}</p>
        <p className='card-text card-glass'><b>Glassware:</b> {props.cocktail.glassware}</p>
    </div>
    
);
}

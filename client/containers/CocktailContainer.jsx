import React, {useEffect, useState} from 'react';
import CocktailCardDeck from '../components/CocktailCardDeck.jsx';

export default function CocktailContainer() {
  // React hooks creating state
  // Destructure an array passing in parameter as first, new parameter is second with set keyword = useState(beginning state)
  const [cocktailList, setCocktailList] = useState([])
  useEffect(() => { 
    
    const getCocktailData = async() =>{
      const data = await fetch('api/universe/drinks')
      const drinks = await data.json();
      setCocktailList([...drinks.drinks])
    }
    getCocktailData().catch(console.error)
  }, []);

  
  return (
    <div className='cocktail-container'>
      <CocktailCardDeck cocktailList={cocktailList} />
    </div>
  )
}
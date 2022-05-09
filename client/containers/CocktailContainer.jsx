import React, {useEffect, useState} from 'react';
import CocktailCardDeck from '../components/CocktailCardDeck.jsx';

const data = [
  {name: 'Daquiri', flavor: 'citrus', glassware: 'coupe'}, 
  {name: 'Old Fashioned', flavor: 'Boozy', glassware: 'Highball'}, 
  {name: 'Martini', flavor: 'Boozy', glassware: 'Nick and Nora'}, 
]

export default function CocktailContainer() {
  // React hooks creating state
  // Destructure an array passing in parameter as first, new parameter is second with set keyword = useState(beginning state)
  const [cocktailList, setCocktailList] = useState([])

  useEffect(() => { 
    setCocktailList((prevState) => {
      return [...cocktailList, ...data]
    })
  }, []);

  
  return (
    <div className='cocktail-container'>
      <CocktailCardDeck cocktailList={cocktailList} />
    </div>
  )
}

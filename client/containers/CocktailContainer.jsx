import React, {useEffect, useState} from 'react';
import CocktailCardDeck from '../components/CocktailCardDeck.jsx';

export default function CocktailContainer() {
  // React hooks creating state
  // Destructure an array passing in parameter as first, new parameter is second with set keyword = useState(beginning state)
  const [cocktailList, setCocktailList] = useState([])
  useEffect(() => { 
    
    const getCocktailData = async () => {
      console.log('is this thing on')
      try {
      const data = await fetch('/universe/drinks');
      const drinks = await data.json();
      console.log(data)
      return drinks;
      }
      catch (err) {
        console.log(err)
      }
    }
    
    console.log('inside use effect')
    console.log(getCocktailData())
    // setCocktailList((prevState) => {
    //   console.log(prevState)
    // })
  }, []);

  
  return (
    <div className='cocktail-container'>
      {/* <CocktailCardDeck cocktailList={cocktailList} /> */}
    </div>
  )
}

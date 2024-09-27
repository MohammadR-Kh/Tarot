import React, { useState } from 'react';
import cardsData from '../../assets/cards.json'; 

const YesOrNo = () => {

  const [card, setCard] = useState(null);

  const drawRandomCard = () => {
    const randomCardId = Math.floor(Math.random() * 22);
  
    const drawnCard = cardsData[randomCardId];

    setCard(drawnCard);
  };

  if(!card){
    return(
    <div className='yes-no'>
      <div className="yes-no-head">
        <h1>Yes/No Reading!</h1>
        <h2>Get a straightforward answer to your question with a simple Yes, No, or Maybe</h2>
      </div>
      <button className='show-card' onClick={drawRandomCard}>Draw a Card</button>
    </div>
    )

  }

  return(
    <div className='yes-no'>
      <div className="yes-no-head">
        <h1>Yes/No Reading!</h1>
        <h2>Get a straightforward answer to your question with a simple Yes, No, or Maybe</h2>
      </div>
      <div className='card-show'>
        <div className="card-display">
          <h2>{card.name}</h2>
          <img 
            src={card.image} 
          />
          <h2><strong>{card.yesorno}</strong></h2>
        </div>
      </div>
      <button className='show-card' onClick={drawRandomCard}>Draw a Card</button>

    </div>
  );
};

export default YesOrNo
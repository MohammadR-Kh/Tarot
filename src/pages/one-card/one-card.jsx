import React, { useState } from 'react';
import cardsData from '../../assets/cards.json'; 

const OneCard = () => {
  const [card, setCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const drawRandomCard = () => {
    const randomCardId = Math.floor(Math.random() * 78);
    
    const randomReversed = Math.random() < 0.5;

    const drawnCard = cardsData[randomCardId];

    setCard(drawnCard);
    setIsReversed(randomReversed);
    setIsCardVisible(true);
  };

  

  if (!card && !isCardVisible) {
    return (
      <div className="one-card">
        <div className="one-head">
          <h1>One-Card Reading!</h1>
          <h2>This is a quick and simple reading for immediate guidance on a question or a situation</h2>
        </div>
        <button className='show-card' onClick={drawRandomCard}>Draw a Card</button>
      </div>
    );
  }

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="one-card">
      <div className="one-head">
        <h1>One-Card Reading!</h1>
        <h2>This is a quick and simple reading for immediate guidance on a question or a situation</h2>
      </div>
      <div className='card-show'>
        <div className="card-display">
          <h2>{card.name} {isReversed ? "(Reversed)" : ""}</h2>
          <img 
            src={card.image} 
            style={{ 
              transform: isReversed ? "rotate(180deg)" : "none",
              transition: 'transform 0.5s ease'
            }} 
          />
          <p><strong>Keywords:</strong> {isReversed ? card.reversed.keywords : card.uprigth.keywords}</p>
          <p><strong>Description:</strong> {isReversed ? card.reversed.description : card.uprigth.description}</p>
          <p><strong>Advice:</strong> {isReversed ? card.reversed.advice : card.uprigth.advice}</p>
        </div>
      </div>
      <button className='show-card' onClick={drawRandomCard}>Draw Another Card</button>
    </div>
  );
};

export default OneCard;

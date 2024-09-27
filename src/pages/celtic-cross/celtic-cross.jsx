import React, { useState } from 'react';
import cardsData from '../../assets/cards.json';

const CelticCross = () => {
  const [cards, setCards] = useState([]);
  const [isReversed, setIsReversed] = useState([]);
  const [showMeanings, setShowMeanings] = useState(false);

  const cardPositions = [
    "Present", 
    "Challenge", 
    "Past", 
    "Future", 
    "Conscious", 
    "Subconscious", 
    "Advice", 
    "External Influences", 
    "Hopes and Fears", 
    "Outcome"
  ];


  const drawCelticCross = () => {
    const allCards = cardsData;
    let selectedCards = [];
    let reversed = [];

    while (selectedCards.length < 10) {
      const randomIndex = Math.floor(Math.random() * allCards.length);
      const card = allCards[randomIndex];

      if (!selectedCards.some(c => c.id === card.id)) {
        selectedCards.push(card);
        reversed.push(Math.random() < 0.5);
      }
    }
    
    setCards(selectedCards);
    setIsReversed(reversed);
    setShowMeanings(false); 
  };

  return (
    <div className="celtic-cross-reading">
      <div className='celtic-cross-head'>
        <h1>Celtic Cross Reading!</h1>
        <h2>Gain deeper insights into your past, present, and future, and explore the complex energies shaping your life and choices.</h2>
      </div>
      <div className="draw-button-container">
        <button className="celtic-button" onClick={drawCelticCross}>Draw Celtic Cross</button>
        
      <button className="celtic-button" onClick={() => setShowMeanings(true)}>
        Show Card Meanings
      </button>
      </div>

    
      <div className="celtic-cross-layout">
        {cards.length === 10 && (
          <>
            <div className="card1-2">
              <img src={cards[0].image} className={`present ${isReversed[0] ? 'reversed' : ''}`} alt="Present" />
              <img src={cards[1].image} className={`challenge ${isReversed[1] ? 'challenge-reversed' : ''}`} alt="Challenge" />
            </div>
            <img src={cards[2].image} className={`card3 ${isReversed[2] ? 'reversed' : ''}`} alt="Past" />
            <img src={cards[3].image} className={`card4 ${isReversed[3] ? 'reversed' : ''}`} alt="Future" />
            <img src={cards[4].image} className={`card5 ${isReversed[4] ? 'reversed' : ''}`} alt="Conscious" />
            <img src={cards[5].image} className={`card6 ${isReversed[5] ? 'reversed' : ''}`} alt="Subconscious" />
            <img src={cards[6].image} className={`card7 ${isReversed[6] ? 'reversed' : ''}`} alt="Advice" />
            <img src={cards[7].image} className={`card8 ${isReversed[7] ? 'reversed' : ''}`} alt="External Influences" />
            <img src={cards[8].image} className={`card9 ${isReversed[8] ? 'reversed' : ''}`} alt="Hopes and Fears" />
            <img src={cards[9].image} className={`card10 ${isReversed[9] ? 'reversed' : ''}`} alt="Outcome" />
          </>
        )}
      </div>
        {showMeanings && (
          <div className="card-meanings">
            {cards.map((card, index) => {
              const meaning = isReversed[index] ? card.reversed : card.uprigth;
              return (
                <div key={card.id} className='card-meaning'>
                  
                  <h2>{cardPositions[index]}</h2> 
                  <h3>{card.name} {isReversed[index] ? "(Reversed)" : ""}</h3>
                  <p><strong>Keywords:</strong> {meaning.keywords}</p>
                  <p><strong>Meaning:</strong> {meaning.description}</p>
                  <p><strong>Advice:</strong> {meaning.advice}</p>
                </div>
              );
            })}
          </div>
        )}
    </div>
  );
};

export default CelticCross;

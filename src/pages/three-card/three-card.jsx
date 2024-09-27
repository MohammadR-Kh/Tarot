import React, { useState } from 'react';
import cardsData from '../../assets/cards.json'; 


const ThreeCard = () => {
  const [cards, setCards] = useState([]);
  const [isReversed, setIsReversed] = useState([]);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const drawThreeCards = () => {
    const allCards = cardsData;
    let selectedCards = [];
    let reversed = [];

    while (selectedCards.length < 3) {
      const randomIndex = Math.floor(Math.random() * allCards.length);
      const card = allCards[randomIndex];

      if (!selectedCards.some(c => c.id === card.id)) {
        selectedCards.push(card);
        reversed.push(Math.random() < 0.5);
      }
    }
    
    setCards(selectedCards);
    setIsReversed(reversed);
    setIsCardVisible(true);
  };

  const CardDisplay = ({ card, isReversed, position }) => {
    if (!card) return null;
  
    const meaning = isReversed ? card.reversed : card.uprigth;
    const imageClass = isReversed ? 'card-image reversed' : 'card-image';
  
    return (
      <div className="three-card-display">
        <h2>{position}</h2>
        <img className={imageClass} src={card.image} alt={card.name} />
        <h3>{card.name} {isReversed && '(Reversed)'}</h3>
        <p><strong>Keywords:</strong> {meaning.keywords}</p>
        <p>{meaning.description}</p>
        <p><strong>Advice:</strong> {meaning.advice}</p>
      </div>
    );
  };

  if (!isCardVisible) {
    return (
      <div className="three-card-reading">
        <div className='three-card-head'>
          <h1>Three-Card Reading!</h1>
          <h2>This spread will give you insights into your past, present, and future.</h2>
        </div>
        <button className="draw-button" onClick={drawThreeCards}>Draw Cards</button>
      </div>
    );
  }
  

  return (
    <div className="three-card-reading">
      <div className='three-card-head'>
        <h1>Three-Card Reading!</h1>
        <h2>This spread will give you insights into your past, present, and future.</h2>
      </div>

      <div className="cards-display">
        {cards.length === 3 && (
          <>
            <CardDisplay card={cards[0]} isReversed={isReversed[0]} position="Past" />
            <CardDisplay card={cards[1]} isReversed={isReversed[1]} position="Present" />
            <CardDisplay card={cards[2]} isReversed={isReversed[2]} position="Future" />
          </>
        )}
      </div>
      <button className="draw-button" onClick={drawThreeCards}>Draw New Cards</button>
    </div>
  );
};

export default ThreeCard;

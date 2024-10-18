import { useState } from 'react';
import cardsData from '../../assets/cards.json';

const positionMapping = [
  "SoulmateCharacteristics",
  "WhenYouWillMeetThem",
  "EmotionalConnection",
  "ObstaclesToUnion",
  "AdviceOnFindingThem",
  "LessonsFromTheRelationship",
  "OutcomeOrFuturePotential"
];

const Soulmate = () => {
  const [cards, setCards] = useState([]);
  const [isReversed, setIsReversed] = useState([]);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [showMeaning, setShowMeaning] = useState(Array(7).fill(false));

  const drawSevenCards = () => {
    const allCards = cardsData;
    let selectedCards = [];
    let reversed = [];

    while (selectedCards.length < 7) {
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
    setShowMeaning(Array(7).fill(false));
  };

  const toggleMeaning = (index) => {
    const updatedShowMeaning = [...showMeaning];
    updatedShowMeaning[index] = !updatedShowMeaning[index]; 
    setShowMeaning(updatedShowMeaning);
  };

  if (!isCardVisible) {
    return (
      <div className="soulmate-reading">
        <div className='soulmate-head'>
          <h1>Soulmate Reading!</h1>
          <h2>This spread will reveal your soulmate's characteristics, when you will meet them, and the potential future of your relationship.</h2>
        </div>
        <button className='draw-button' onClick={drawSevenCards}>Draw 7 Cards</button>
      </div>
    );
  }

  return (
    <div className="soulmate-reading">
      <div className='soulmate-head'>
        <h1>Soulmate Reading!</h1>
        <h2>This spread will reveal your soulmate's characteristics, when you will meet them, and the potential future of your relationship.</h2>
      </div>
        <div className='soulmate-cards-display'>
          {cards.map((card, index) => {
            const position = positionMapping[index];
            const isCardReversed = isReversed[index];
            const meaning = card.soulmate_reading[position];
            const meanings = isReversed ? card.reversed : card.uprigth;
            

            return (
              <div key={card.id} className="soulmate-display" >
                <h3>Card {index + 1}: {card.name}</h3>
                <img 
                  src={card.image} 
                  alt={card.name} 
                  style={{ transform: isCardReversed ? 'rotate(180deg)' : 'none' }}
                />
                <p>
                  <strong>{position.replace(/([A-Z])/g, ' $1')}</strong>: {isCardReversed ? meaning.reversed : meaning.upright}
                </p>
                <button className='soulmate-show' onClick={() => toggleMeaning(index)}>
                {showMeaning[index] ? "Hide Meaning" : "Show Meaning"}
              </button>

              {showMeaning[index] && (
                <div className="card-meaning">
                  <p><strong>Keywords:</strong> {meanings.keywords}</p>
                  <p><strong>Description:</strong> {meanings.description}</p>
                  <p><strong>Advice:</strong> {meanings.advice}</p>
                </div>
              )}
              </div>
            );
          })}
        </div>
      <button className='draw-button' onClick={drawSevenCards}>Draw 7 Cards</button>
    </div>
  );
};

export default Soulmate;

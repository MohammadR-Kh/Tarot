import { useState } from 'react';
import cardsData from '../../assets/cards.json';


const CareerPath = () => {

  const positionMapping = [
    "CurrentPosition",
    "SkillsAndStrengths",
    "ChallengesOrObstacles",
    "FutureOpportunities",
    "AdviceOrGuidance"
  ];

  const [cards, setCards] = useState([]);
  const [isReversed, setIsReversed] = useState([]);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [showMeaning, setShowMeaning] = useState(Array(5).fill(false));

  const drawFiveCards = () => {
    const allCards = cardsData;
    let selectedCards = [];
    let reversed = [];

    while (selectedCards.length < 5) {
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
    setShowMeaning(Array(5).fill(false));
  };

  const toggleMeaning = (index) => {
    const updatedShowMeaning = [...showMeaning];
    updatedShowMeaning[index] = !updatedShowMeaning[index]; 
    setShowMeaning(updatedShowMeaning);
  };

  if (!isCardVisible) {
    return (
      <div className="career-path-reading">
        <div className='career-path-head'>
          <h1>Career Path Reading!</h1>
          <h2>This spread will provide insight into your current position, strengths, challenges, future opportunities, and guidance to help you advance on your career journey.</h2>
        </div>
        <button className='draw-button' onClick={drawFiveCards}>Draw 5 Cards</button>
      </div>
    );
  }


  return(
    <div className="career-path-reading">
        <div className='career-path-head'>
          <h1>Career Path Reading!</h1>
          <h2>This spread will provide insight into your current position, strengths, challenges, future opportunities, and guidance to help you advance on your career journey.</h2>
        </div>
        <div className='career-cards-display'>
          {cards.map((card, index) => {
            const position = positionMapping[index];
            const isCardReversed = isReversed[index];
            const meaning = card.career_path_reading[position];
            const meanings = isReversed ? card.reversed : card.uprigth;
            

            return (
              <div key={card.id} className="career-display" >
                <h3>Card {index + 1}: {card.name}</h3>
                <img 
                  src={card.image} 
                  alt={card.name} 
                  style={{ transform: isCardReversed ? 'rotate(180deg)' : 'none' }}
                />
                <p>
                  <strong>{position.replace(/([A-Z])/g, ' $1')}</strong>: {isCardReversed ? meaning.reversed : meaning.upright}
                </p>
                <button className='career-show' onClick={() => toggleMeaning(index)}>
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
      <button className='draw-button' onClick={drawFiveCards}>Draw 5 Cards</button>
    </div>
  )
};

export default CareerPath;
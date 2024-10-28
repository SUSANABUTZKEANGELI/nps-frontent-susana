import React, { useState } from 'react';
import ScorePageOne from './presentation/pages/ScorePageOne';
import ScorePageTwo from './presentation/pages/ScorePageTwo';
import ScorePageLogin from './presentation/pages/ScorePageLogin';
import { LoginProvider } from './presentation/components/modules/Login';

const App: React.FC = () => {
  const [isScorePageLoginOpen, setIsScorePageLoginOpen] = useState(true); 
  const [isScorePageOneOpen, setIsScorePageOneOpen] = useState(false); 
  const [isScorePageTwoOpen, setIsScorePageTwoOpen] = useState(false); 
  const [selectedRatingScale, setSelectedRatingScale] = useState<number>(0); 
  const [scoreQuestion, setQuestion] = useState<string | null>(null);

  const openScorePageOne = (scoreQuestion : string) => {
    setQuestion(scoreQuestion);
    setIsScorePageLoginOpen(false);
    setIsScorePageOneOpen(true);
  }

  const openScorePageTwo = (campo: number) => {
    setSelectedRatingScale(campo); 
    setIsScorePageOneOpen(false);
    setIsScorePageTwoOpen(true);
 };

  const closeScorePageLogin = () => {
    setIsScorePageLoginOpen(false);
  }

  const closeScorePageOne = () => {
    setIsScorePageOneOpen(false);
    setIsScorePageLoginOpen(true);
  }

  const closeScorePageTwo = () => {
     setIsScorePageTwoOpen(false);
     setIsScorePageOneOpen(true);
  }

  return (
    <div>
      <LoginProvider>

      <ScorePageLogin isOpen={isScorePageLoginOpen} onRequestClose={closeScorePageLogin} onNext={openScorePageOne} />

      <ScorePageOne isOpen={isScorePageOneOpen} onRequestClose={closeScorePageOne} onNext={openScorePageTwo} question={scoreQuestion || 'On a scale of 0 to 10, how likely are you recommend our products to a friend or colleague?'} />

      <ScorePageTwo isOpen={isScorePageTwoOpen} onRequestClose={closeScorePageTwo} selectedRatingScale={selectedRatingScale} />

      </LoginProvider>
    </div>
  );
};

export default App;


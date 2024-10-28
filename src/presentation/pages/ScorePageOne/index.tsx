import React, { useEffect, useState } from 'react';
import { RatingScale } from '../../components/modules/RatingScale';
import Logo from '../../components/modules/Logo/Logo';
import { Button } from '../../components/elements/Button';
import { Modal } from '../../components/modules/Modal';
import { CloseButton } from '../../components/elements/CloseButton';

interface ScorePageOneProps {
   isOpen: boolean;
   onRequestClose: () => void;
   onNext: (selectedRating: number) => void; 
   question: string; 
}

export const ScorePageOne: React.FC<ScorePageOneProps> = ({ isOpen, onRequestClose, onNext, question }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const scoreQuestion = question;
 
  useEffect(() => {
    if (isOpen) {
      setSelectedRating(null); // Reseta o valor para null toda vez que o modal for aberto
    }
  }, [isOpen]); // Dependência isOpen garante que o efeito ocorra quando o modal abrir

  const handleRatingSelect = (value: number) => {
    setSelectedRating(value);
  };

  const handleSend = () => {
     if (selectedRating !== null) {{state: {selectedRating}}
        onNext(selectedRating); 
     } else {
        alert('Please select a score before sending.');
     }
  };

   return isOpen && (
      <Modal isOpen={true} onRequestClose={function (): void {
        throw new Error('Function not implemented.');
      } } contentLabel={undefined} >

         <CloseButton onClick={onRequestClose}>x</CloseButton>

         <Logo />

         <h1 style={{ fontSize: '22px', marginBottom: '10px', display: 'block' }}>
            {scoreQuestion}
         </h1>

         <label style={{ fontSize: '18px', marginBottom: '10px', display: 'block' }}>
            Consider 0 as very unlikely and 10 as extremely likely
         </label>
         
         <br />

         <RatingScale onSelect={handleRatingSelect} />
      
         <div style={{
            display: 'flex',              
            justifyContent: 'flex-end',    
            backgroundColor: '#f0f0f0',    
            padding: '20px',                
            borderRadius: '8px',            
            marginTop: '20px'
            }}>
            <Button style={{ width: '150px', height: '40px', marginRight: '10px', border: '1px solid #000', borderRadius: '5px' }} onClick={onRequestClose}>Ask me later</Button>
            <Button style={{ width: '200px', height: '40px', backgroundColor: 'green' }} onClick={handleSend}>Send</Button>
        
         </div>
      </Modal>
  );
};

export default ScorePageOne;


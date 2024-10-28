import React, { useState } from 'react';
import { Input } from '../../components/elements/Input';
import Logo from '../../components/modules/Logo/Logo';
import { CloseButton } from '../../components/elements/CloseButton';
import { Button } from '../../components/elements/Button';
import { Category } from '../../components/modules/Category';
import { Modal } from '../../components/modules/Modal';
import { useLogin } from '../../components/modules/Login/LoginProvider';
import axios from 'axios';

interface ScorePageTwoProps {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedRatingScale: number; 
}
export const ScorePageTwo: React.FC<ScorePageTwoProps> = ({ isOpen, onRequestClose, selectedRatingScale }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const isGradeLow = selectedRatingScale < 7; 
  const { login } = useLogin();
  const [reasonDescription, setreasonDescription] = useState<string>('');  // Captura o valor do input
  const Score = selectedRatingScale;
  const Login = login;
  const CategoryId = selectedCategory;
  const Description = reasonDescription;
  
  const handleCategorySelect = (value: number) => {
    setSelectedCategory(value);
  };

  const handleSend = async () => {
     if (isGradeLow) {
        if (selectedCategory === null || selectedCategory === undefined){
           alert('Please select a category before sending.');
        }
      }
      try {
        const response = await axios.post('https://localhost:7263/api/nps', 
          {Login, Score, Description, CategoryId},
          { headers: { 'Content-Type': 'application/json' }});
  
        if (response.data.success) {
          alert('Feedback enviado com sucesso!');
          onRequestClose();  // Fechar o modal ao enviar
        } else {
          alert('Erro ao enviar feedback.');
        }
      } catch (error) {
        console.error("Erro ao enviar feedback:", error);
        alert('Falha ao conectar com o servidor.');
      }      
   };

  return isOpen && (
      <Modal isOpen={true} onRequestClose={function (): void {
      throw new Error('Function not implemented.');
    } } contentLabel={undefined}>

      <CloseButton onClick={onRequestClose}>x</CloseButton>

      <Logo />

      <h1 style={{ fontSize: '22px', marginBottom: '10px', display: 'block' }}>We appreciate your feedback!</h1>

      <label style={{ fontSize: '18px', marginBottom: '10px', display: 'block' }}>
        {isGradeLow
           ? 'How can we improve? Use the buttons or the comments field below to deepen your evaluation.'
           : 'How can we improve? Use the comments field below to deepen your evaluation.'  
         }
      </label>
      <br />

      {isGradeLow && (<><Category onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} /><br /></>)}

      <Input
        onChange={(e) => setreasonDescription(e.target.value)}
        placeholder="Please, if you wish, detail the reason"
        style={{ width: '680px', height: '40px', marginBottom: '20px', borderRadius: '5px' }}
      />

      <div style={{
         display: 'flex',              
         justifyContent: 'flex-end',    
         backgroundColor: '#f0f0f0',    
         padding: '20px',                
         borderRadius: '8px',            
         marginTop: '20px'
         }}>
         <Button style={{ width: '100px', height: '40px', marginRight: '10px', border: '1px solid #000', borderRadius: '5px' }} onClick={onRequestClose}>Return</Button>
         <Button style={{ width: '150px', height: '40px', backgroundColor: 'green' }} onClick={handleSend}>Send</Button>
      </div>

    </Modal>

  );
};

export default ScorePageTwo;

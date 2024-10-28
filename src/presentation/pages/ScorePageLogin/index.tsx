import React, { useState } from 'react';
import Logo from '../../components/modules/Logo/Logo';
import { Button } from '../../components/elements/Button';
import { Modal } from '../../components/modules/Modal';
import { CloseButton } from '../../components/elements/CloseButton';
import axios from 'axios';
import { Input } from '../../components/elements/Input';
import { useLogin } from '../../components/modules/Login/LoginProvider';

interface ScorePageLoginProps {
   isOpen: boolean;
   onRequestClose: () => void;
   onNext: (question : string) => void; 
}

export const ScorePageLogin: React.FC<ScorePageLoginProps> = ({ isOpen, onRequestClose, onNext }) => {
  const { setLogin } = useLogin();
  const [localLogin, setLocalLogin] = useState('');
  const [question, setQuestion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
     try {
        const login = localLogin;
        const response = await axios.get(`https://localhost:7263/api/nps?login=${encodeURIComponent(login)}`);

        if (response.data.success){
           setQuestion(response.data.message); 
           setLogin(localLogin);
           onNext(response.data.message);
        } 
        else {
           setError(response.data.message);
        }
     } 
     catch (err: any) {
        setError("Erro ao conectar à API.");
     }
  };

  return isOpen && (
      <Modal isOpen={true} onRequestClose={onRequestClose} contentLabel={undefined} >

         <CloseButton onClick={onRequestClose}>x</CloseButton>

         <Logo />

         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Input 
             value={localLogin}
             onChange={(e) => setLocalLogin(e.target.value)}
             placeholder="Enter login"
             style={{ width: '400px', height: '30px', borderRadius: '5px' }}
            />
         </ div>

         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Button style={{ width: '100px', height: '40px', marginLeft: '60px' }} onClick={handleLogin}>Start</Button>
         </ div>

         {error && <p style={{ color: 'red' }}>{error}</p>}
      </Modal>
  );
};

export default ScorePageLogin;


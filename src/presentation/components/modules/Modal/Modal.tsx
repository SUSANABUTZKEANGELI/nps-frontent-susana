import { PropsWithChildren, useEffect } from 'react';
import * as S from './styles';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void; 
    contentLabel : any;
  }

export function Modal({ isOpen, onRequestClose, children }: PropsWithChildren<ModalProps>) {
    
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onRequestClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onRequestClose]);

  return (
     <S.Dialog open={isOpen}>
         {children}
     </S.Dialog>
  );
}

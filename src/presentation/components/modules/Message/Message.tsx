import React from 'react';
import okIcon from '../../../../assets/ok_icon.png';
import nokIcon from '../../../../assets/nok_icon.png';

type MessageProps = {
  status: boolean; 
  message: string; 
  onClose: () => void; 
};

export const Message: React.FC<MessageProps> = ({ status, message, onClose }) => {
  const iconSrc = status ? okIcon : nokIcon;

    return (
    <div>
      <span onClick={onClose}>✖</span>
      <img src={iconSrc} alt={status ? 'Success' : 'Error'} />
      <p>{message}</p>
    </div>
  );
};


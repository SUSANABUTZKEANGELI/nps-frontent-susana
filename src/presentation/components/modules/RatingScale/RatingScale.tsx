import React, { useState } from 'react';

interface RatingScaleProps {
  onSelect: (value: number) => void; // Callback quando um valor é selecionado
}

const RatingScale: React.FC<RatingScaleProps> = ({ onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null); // Armazena o valor selecionado
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    onSelect(value); // Chama a função de callback para passar o valor selecionado para o componente pai
  };

  const getButtonColor = (value: number) => {
    if ((hoverValue === value) || (selectedValue === value)) {
       if (value === 7 || value === 8) {
          if ((selectedValue === value)){
              return '#ffa500';
          }
          else{
              return '#fccdaa';
          }
       }
       if (value === 9 || value === 10) {
        if ((selectedValue === value)){
            return '#00ab5d';
        }
        else{
            return '#aae3c9';
        }
     }
       if ((selectedValue === value)){
          return '#ff3636';
       }
       else{
          return '#ff8f8f';
       }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      {Array.from({ length: 11 }, (_, i) => (
        <button
          key={i}
          onClick={() => handleSelect(i)}
          onMouseEnter={() => setHoverValue(i)} // Define o valor em hover
          onMouseLeave={() => setHoverValue(null)} // Limpa o valor em hover
          style={{
            padding: '10px',
            border: selectedValue === i ? '2px solid black' : '1px solid grey',
            backgroundColor: getButtonColor(i),
            cursor: 'pointer',
            width: '40px',
            height: '40px',
          }}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default RatingScale;

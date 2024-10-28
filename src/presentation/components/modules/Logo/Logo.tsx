import React from 'react';
import logo from '../../../../assets/Logo_AmbevTech_Positivo.png';

const Logo: React.FC = () => {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width: '280px', height: 'auto', display: 'block', margin: '0 auto' }} />
    </div>
  );
};

export default Logo;

import React, { useState } from 'react';
import WelcomeCandidate from './inicio/WelcomeCandidate';
import ImagenCandidate from './inicio/ImagenCandidate';

function BienvenidoContador(props) {
  const [welcomeCount, setWelcomeCount] = useState('Bienvenido candidato');
  
  return (
    <div className="container">
      
      <ImagenCandidate/>
      <WelcomeCandidate numberCandidate = {props.numberCandidate} />
    </div>
  );
}

export default BienvenidoContador;

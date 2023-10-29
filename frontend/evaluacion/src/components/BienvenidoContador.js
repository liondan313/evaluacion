import React, { useState } from 'react';

function BienvenidoContador() {
  const [welcomeCount, setWelcomeCount] = useState('Bienvenido candidato');
  
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-4 offset-md-4 text-center d-flex align-items-center">

          <div className="card">
            <img src='https://pbs.twimg.com/profile_images/378800000309448538/43d6e9852fd96e5d66066c2e4c1868b6_400x400.png' className="card-img-top" alt="Cara de un perrito" />            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BienvenidoContador;

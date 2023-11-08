import React, { useState } from 'react';

function ContadorFuncional() {
  const [functionalCount, setFunctionalCount] = useState(0);

  const incrementar = () => {
    setFunctionalCount(functionalCount + 1); // Actualizamos el estado "count"
  };

  const decrementar = () => {
    setFunctionalCount(functionalCount - 1); // Actualizamos el estado "count"
  };

  return (
    <div>
      <p>Contador: {functionalCount}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default ContadorFuncional;
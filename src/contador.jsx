import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    if (contador < 10) {
      setContador(contador + 1);
    }
  }

  function zerar() {
    setContador(0);
  }

  return (
    <div className="card my-3 p-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Contador</h5>
        <p className="card-text">Valor atual: <strong>{contador}</strong></p>
        <button className="btn btn-primary me-2" onClick={incrementar}>
          Incrementar
        </button>
        <button className="btn btn-secondary" onClick={zerar}>
          Zerar
        </button>
      </div>
    </div>
  );
}

export default Contador;
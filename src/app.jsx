import React, { useState } from 'react';
import Saudacao from './nome';
import Contador from './contador';

function CartaoInput(props) {
  return (
    <div className="card my-3 p-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <input 
          type="text" 
          className="form-control mb-3" 
          placeholder="Digita um nome..." 
          value={props.nome}
          onChange={props.aoDigitar}
        />
        <Saudacao nome={props.nome} />
      </div>
    </div>
  );
}

function App() {
  const [nomeDigitado, setNomeDigitado] = useState("");

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Trabalho de React - Props</h1>

      <h2>Exercício 1</h2>
      <CartaoInput 
        titulo="Digite o seu Nome"
        nome={nomeDigitado}
        aoDigitar={(e) => setNomeDigitado(e.target.value)}
      />

      <h2>Desafio Opcional</h2>
      <Contador />
    </div>
  );
}

export default App;
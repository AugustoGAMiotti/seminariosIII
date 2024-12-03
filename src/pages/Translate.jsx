import React, { useState } from 'react';
import './translate.css'

function Translate() {
    const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    if (inputText.trim()) {
      setTranslatedText(inputText);
    } else {
      alert('Por favor, insira um texto para traduzir!');
    }
  };

  return (
    <div className="App">
      <h1>Português para Libras</h1>
      <div className="input-container">
        <label htmlFor="input-text">Digite um conjunto de simbolos: </label>
        <br/>
        <input
          type="text"
          id="input-text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escreva aqui"
        />
        <button onClick={handleTranslate}>Traduzir</button>
      </div>
      <div className="output-container">
        <h2>Texto em Libras:</h2>
        <p className="libras-text">{translatedText || '____'}</p>
      </div>
    </div>
  );
}

export default Translate;
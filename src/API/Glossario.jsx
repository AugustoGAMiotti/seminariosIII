import React, { useState } from 'react';
import axios from 'axios';

function Glossario() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/glossario/${inputText.toLowerCase()}`);
      setTranslatedText(response.data.sinal);
      setError('');
    } catch (err) {
      setTranslatedText('');
      setError('Termo não encontrado');
    }
  };

  return (
    <div className="Glossario">
      <h1>Tradutor Português para Libras</h1>
      <div className="input-container">
        <label htmlFor="input-text">Digite em Português:</label>
        <input
          type="text"
          id="input-text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Escreva aqui..."
        />
        <button onClick={handleTranslate}>Traduzir</button>
      </div>
      <div className="output-container">
        <h2>Texto em Libras:</h2>
        {translatedText && <p className="libras-text">{translatedText}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default Glossario;
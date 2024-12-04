const express = require('express');
const cors = require('cors');
const glossario = require('./json/glossario.json');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/glossario', (req, res) => {
  res.json(glossario);
});

app.get('/api/glossario/:termo', (req, res) => {
  const termo = req.params.termo.toLowerCase();

  if (glossario[termo]) {
    res.json({ termo, sinal: glossario[termo] });
  } else {
    res.status(404).json({ error: 'Termo não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

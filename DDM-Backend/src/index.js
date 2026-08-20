const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const wiki = require("./wiki.js");

app.use("/wiki",wiki);

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  // res.send(`Esse é o backend do delivery dungeon meshi`);
  res.json({ message: 'DDM Backend está rodando!' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


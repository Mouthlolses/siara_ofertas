// 
const express = require('express');
const cors = require('cors');  // Adicionando a importação do cors
const app = express();
const PORT = 5000;

// Middleware para CORS (se necessário para o frontend)
app.use(cors());

// Middleware para lidar com JSON
app.use(express.json());

// Definindo uma rota básica
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Node server!" });
});

// Rota para testar a página inicial
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Server</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
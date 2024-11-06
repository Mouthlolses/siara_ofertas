// 
const express = require('express');
const app = express();
const PORT = 5000;

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
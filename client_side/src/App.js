import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fazendo uma requisição para o backend
    fetch('/api')  // O proxy já vai redirecionar para http://localhost:5000/api
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);  // Armazenando a resposta do backend
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message ? message : 'Kelvissimo, O PÉ DE CANA'}</h1>
      </header>
    </div>
  );
}

export default App;
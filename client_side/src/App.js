import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // Exemplo de requisição usando fetch no React
useEffect(() => {
  fetch('http://localhost:5000/api')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Carregando mensagem..."}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

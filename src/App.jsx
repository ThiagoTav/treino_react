import React, { useState } from 'react';
import './App.css';
import Key from './components/Key';

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleKeyClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(display));
        setDisplay("");
      } catch (error) {
        setResult("Erro");
      }
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <h2>{display}</h2>
      <h3>{result}</h3>
      <div className='AppWithBorder'>
      <div className='key_button'>
        <Key value="1" onClick={handleKeyClick} />
        <Key value="2" onClick={handleKeyClick} />
        <Key value="3" onClick={handleKeyClick} />
        <Key value="+" onClick={handleKeyClick} />
      </div>
      <div className='key_button'>
        <Key value="4" onClick={handleKeyClick} />
        <Key value="5" onClick={handleKeyClick} />
        <Key value="6" onClick={handleKeyClick} />
        <Key value="-" onClick={handleKeyClick} />
      </div>
      <div className='key_button'>
        <Key value="7" onClick={handleKeyClick} />
        <Key value="8" onClick={handleKeyClick} />
        <Key value="9" onClick={handleKeyClick} />
        <Key value="*" onClick={handleKeyClick} />
      </div>
      <div className='key_button'>
        <Key value="C" onClick={handleKeyClick} />
        <Key value="0" onClick={handleKeyClick} />
        <Key value="/" onClick={handleKeyClick} />
        <Key value="=" onClick={handleKeyClick} />
      </div>
    </div>
  </div>
  );
}

export default App;
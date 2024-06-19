import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <div className="title">My Calculator</div>
      <Calculator></Calculator>
    </div>
  );
}

export default App;

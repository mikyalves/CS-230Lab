import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';


function App() {
  return (
    <div className="App" style={{fontFamily: 'Times New Roman, Times, serif' }}>
      <Navbar />

      <h1>CS 230Lab</h1>
      <h2>Section -003</h2>
      <p>WVU ID: 800301530</p>
      <p>Hi, I'm MiKy!</p>

      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default App;
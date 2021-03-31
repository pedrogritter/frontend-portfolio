import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import newlogo from './LogoMakr.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={newlogo} className="App-logo" alt="logo" />
        <p>
          I am a <b>FrontEnd Developer</b> creating modern websites
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;

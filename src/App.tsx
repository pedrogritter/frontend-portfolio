import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import styled from "styled-components";

import newlogo from './LogoMakr.png'

const HeroTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  padding: 1rem;
`;

const Contact = styled.a`
  margin-top:1rem;  
  font-size: 18px;
  font-weight: 500;
  padding: 1rem;
  background-color: darkslategrey;
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  text-transform: uppercase;
  border-radius:8px;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={newlogo} className="App-logo" alt="logo" />
        <HeroTitle>
          I am a <b>FrontEnd Dev</b> creating modern websites
        </HeroTitle>
        <Contact
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </Contact>
      </header>
      <Footer />
    </div>
  );
}

export default App;

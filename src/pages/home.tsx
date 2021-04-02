import React from "react";
import styled from "styled-components";
import newlogo from "../LogoMakr.png";
import ContentSelector from "../components/content-selector";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  background-color: black;
  padding-top: 3rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HeroTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  padding: 1rem;
`;

const Contact = styled.div`
  margin-top: 1rem;
  font-size: 18px;
  font-weight: 500;
  padding: 1rem;
  background-color: darkslategrey;
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 8px;
`;

function Home() {
  return (
    <PageContainer>
      <img src={newlogo} className="App-logo" alt="logo" />
      <HeroTitle>
        I am a <b>FrontEnd Dev</b> creating modern websites
      </HeroTitle>
      <Link to="/contact">
        <Contact>
          Contact me
        </Contact>
      </Link>
      <ContentSelector />
    </PageContainer>
  );
}

export default Home;

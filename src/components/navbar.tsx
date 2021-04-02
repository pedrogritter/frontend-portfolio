// React
import React from "react";
// Style
import styled from "styled-components";

import { Link } from "react-router-dom";
import { down } from "styled-breakpoints";

const NavbarOuterContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const NavbarContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgb(10, 16, 16) 0%,
    rgb(20, 31, 31) 75%,
    rgb(41, 61, 61) 96%
  );
  z-index: 100;
  height: 65px;
  z-index: 100;
  height: 100px;
  margin: 0px auto;
  padding: 0px;
`;

const NavbarComponent = styled.nav`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 3.25rem;
  position: relative;
  z-index: 10;
  flex-direction: row;
  color: white;

  ${down('lg')} {
    flex-direction: column;
    justify-content: center;
  }

`;

const Top = styled.div`
  display: inline-flex;
  padding-right: 6rem;

  ${down('lg')} {
    padding:0rem;
    margin-top: 5rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  ${down('lg')} {
    width: 100vw;
    justify-content: center;
    background: linear-gradient(
    black, 
    transparent
  );
  }
`;

const Logo = styled.div`
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const NavElement = styled.h3`
  padding: 1rem;
  font-weight: 500;
`;

const Navbar = () => {
  return (
    <NavbarOuterContainer>
      <NavbarContainer>
        <NavbarComponent>
          <Top>
            <NavLink to="/">
              <Logo>
                {" "}
                <h1>FrontEnd Dev</h1>
              </Logo>
            </NavLink>
          </Top>
          <Bottom>
            <NavElement>About</NavElement>

            <NavLink to="/articles">
              <NavElement>Articles</NavElement>
            </NavLink>

            <NavLink to="/projects">
              <NavElement>Projects</NavElement>
            </NavLink>

            <NavLink to="/contact">
              <NavElement>Contact</NavElement>
            </NavLink>
          </Bottom>
        </NavbarComponent>
      </NavbarContainer>
    </NavbarOuterContainer>
  );
};

export default Navbar;

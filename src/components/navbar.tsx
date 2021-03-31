// React
import React from "react";
// Style
import styled from "styled-components";

const NavbarOuterContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index: 100;
`;


const NavbarContainer = styled.div`
    background: linear-gradient(90deg, rgb(10, 16, 16) 0%, rgb(20, 31, 31) 75%, rgb(41, 61, 61) 96%);
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

  color: white;
`;

const Left = styled.div`
    display: inline-flex;
    width: 60vw;
    padding-left:2rem;
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 40vw;
    padding-right:4rem;
`;

const Logo = styled.div`
    padding: 1rem;
`;

const NavElement = styled.h3`
    padding: 1rem;
`; 


const Navbar = () => {

    return (
        <NavbarOuterContainer>
            <NavbarContainer>
                <NavbarComponent>
                    <Left>
                        <Logo> <h1>Pedro Gritter - FrontEnd developer</h1></Logo>
                    </Left>
                    <Right>
                        <NavElement>About</NavElement>
                        <NavElement>Projects</NavElement>
                        <NavElement>Contact</NavElement>
                    </Right>
                </NavbarComponent>
            </NavbarContainer>
        </NavbarOuterContainer>
    )
}

export default Navbar;
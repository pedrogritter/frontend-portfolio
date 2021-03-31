// React
import React from "react";
// Style
import styled from "styled-components";


const NavbarContainer = styled.div`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,8,41,1) 20%, rgba(6,6,77,1) 75%);
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
    )
}

export default Navbar;
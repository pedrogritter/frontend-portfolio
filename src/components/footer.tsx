// React
import React from "react";
// Style
import styled from "styled-components";

const BottomContent = styled.div`
  box-shadow: 0 2px 7px 0 rgba(0,0,0,.3);
  margin-top: -2px;
  z-index: 20;
  position: relative;
  background: #293d3d;
`;



const FooterContainer = styled.footer`
    padding: 48px 24px 100px;
`;


const Footer = () => {

    return(
    <BottomContent>
        <FooterContainer>

        </FooterContainer>
    </BottomContent>
    )
}

export default Footer;
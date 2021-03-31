// React
import React from "react";
// Style
import styled from "styled-components";
import githubMark from "../resources/img/GitHub-Mark-64px.png";

const BottomContent = styled.div`
  box-shadow: 0 2px 7px 0 rgba(0,0,0,.3);
  margin-top: -2px;
  z-index: 20;
  position: relative;
  background: #293d3d;
`;



const FooterContainer = styled.footer`
    padding: 48px 24px 100px;
    display:flex;
    flex-direction: column;
`;

const Link = styled.div`
    padding: 1rem 1rem;
    align-items: center;
    height: 64px;
`;

const GitIcon = styled.img`
    width:32px;
    height:32px;
`;

const Copyright = styled.span`
    font-size: 14px;
    color: white;
    justify-self: flex-end;
`;

const Footer = () => {

    const github = <>
        <Link>
            <span>Follow me on </span> 
            <a href="https://github.com/pedrogritter">
                <GitIcon src={githubMark} />
            </a>
        </Link>
    </>

    return(
    <BottomContent>
        <FooterContainer>
            {github}
            <Copyright>© 2021 Pedro Gritter</Copyright>
        </FooterContainer>
    </BottomContent>
    )
}

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
padding: 1rem 2rem;
`;

const CardImg = styled.img``;

const CardTitle = styled.div`
    font-size:24px;
    color: white;
    text-decoration: none !important;
    padding: 1rem 0rem;
`;

const Information = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 2px solid gold;
    padding: 1rem 2rem;
    
`;

const InfoItem = styled.div`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size:13px;
`;

interface ContentCardProps {
  article?: boolean;
  title: string;
  img_src?: string;
  readtime?: string;
  date?: string;
  url: string;
}

const ContentCard = (props: ContentCardProps) => {
  return (
    <Link to={props.url} style={{ textDecoration: 'none' }}>
      <CardContainer>
        {props.img_src && <CardImg src={props.img_src} />}
        <CardTitle>{props.title}</CardTitle>
        {props.article && (
          <Information>
            <InfoItem>{props.readtime} min read</InfoItem>
            <InfoItem>{props.date}</InfoItem>
          </Information>
        )}
      </CardContainer>
    </Link>
  );
};

export default ContentCard;

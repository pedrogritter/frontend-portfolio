import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import articles from "../resources/article_list.json";
import projects from "../resources/project_list.json";
import ContentCard from "./content-card";

const ContentContainer = styled.div`
    margin-top: 5rem;
    justify-content: center;
    justify-self: center;
    padding: 2rem 2rem 4rem 2rem;
`;

const Selector = styled.div`
    display:flex;
    flex-direction:row;
    padding: 1rem;
    justify-content:center;
`;

const SelectorOption = styled.div`
    padding:1rem;
    cursor: pointer;
    font-size: 30px;
`;

const Content = styled.div``;

const ItemContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`;


const ContentSelector = () => {

    const [selected, setSelected]= useState<"articles" | "projects">("articles");

    const handleClick = (option: "articles" | "projects") => {
        setSelected(option)
    }

    const article_list = articles.map( (item, index) => {
        const url = `article/${index + 1}`

        return (
            // <Link to={url}>
            //     <ItemContainer>
            //         <h4 key={index}>{item.title}</h4>
            //     </ItemContainer>
            // </Link>
            <ContentCard 
                title={item.title}
                url={url}
                readtime={item.information.read_time}
                date={item.information.date}
                article={true}
            />
        )
    });

    const project_list = projects.map((item, index) => {
        return (
            <ItemContainer>
                <h4 key={index}>{item.title}</h4>
            </ItemContainer>
        )
    });

    
    return (
        <ContentContainer>
            <Selector> 
                <SelectorOption onClick={() => handleClick("articles")}>Articles</SelectorOption>
                <SelectorOption onClick={() => handleClick("projects")}>Projects</SelectorOption>
            </Selector>
            <Content>
                { selected == "articles" ? 
                    article_list
                    :
                    project_list
                }   
            </Content>
        </ContentContainer>

    ) 
}

export default ContentSelector;
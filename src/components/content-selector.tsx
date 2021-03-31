import { useState } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
    margin-top: 5rem;
`;

const Selector = styled.div`
    display:flex;
    flex-direction:row;
    padding: 1rem;
`;

const SelectorOption = styled.div`
    padding:1rem;
    cursor: pointer;
`;

const Content = styled.div``;


const ContentSelector = () => {

    const [selected, setSelected]= useState<"articles" | "projects">("articles");

    const handleClick = (option: "articles" | "projects") => {
        setSelected(option)
    }

    return (
        <ContentContainer>
            <Selector> 
                <SelectorOption onClick={() => handleClick("articles")}>Articles</SelectorOption>
                <SelectorOption onClick={() => handleClick("projects")}>Projects</SelectorOption>
            </Selector>
            <Content>
                { selected}
            </Content>
        </ContentContainer>

    ) 
}

export default ContentSelector;
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import articles from "../resources/article_list.json";

const PageContainer = styled.div`
    background-color: black ;
    padding-top: 13rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 13rem 2rem 0rem 2rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction:column;

`;

const ArticleTitle = styled.div`
    font-size: 2.5rem;
    padding-bottom: 0.3rem;
`;

const ArticleInfo = styled.div`
    border-top: 2px solid gold;
    padding-top: 0.3rem;
    display:flex;
    justify-content: space-between;
`;

const InfoItem = styled.div`
    font-size: 0.75rem;
    text-transform: uppercase;
`;


interface ArticleProps {
    article: {
        "id": string,
        "title": string,
        "information": {
            "read_time": string,
            "date": string
        } 
    };
}

const Article = (props: ArticleProps) => {
    // let { id }= useParams();
    
    const article = articles[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    
    const header =  <HeaderContainer>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <ArticleInfo>
                            <InfoItem>{article.information.read_time} min read</InfoItem>
                            <InfoItem>{article.information.date}</InfoItem>
                        </ArticleInfo>
                    </HeaderContainer>


    return(
        <PageContainer>
            {header}
        </PageContainer>
    )
} 

export default Article;
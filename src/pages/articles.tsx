import styled from "styled-components";
import articles from "../resources/article_list.json";


const PageContainer = styled.div`
    background-color: black ;
    padding-top: 5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const ArticleContainer = styled.div`
    display:flex;
    flex-direction: row;
`;


const Articles = () => {

    const article_list = articles.map( (item, index) => {
        return (
            <ArticleContainer>
                <h3 key={index}>{item.id} - </h3>
                <h3 key={index}>{item.title}</h3>
            </ArticleContainer>
        )
    });

    return (
        <PageContainer>
            <h1>Articles</h1>
            {article_list}
        </PageContainer>
    )
}

export default Articles;
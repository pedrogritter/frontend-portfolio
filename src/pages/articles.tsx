import styled from "styled-components";

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


const Articles = () => {
    return (
        <PageContainer>
            <h1>Articles</h1>
        </PageContainer>
    )
}

export default Articles;
import styled from "styled-components";
import projects from "../resources/project_list.json";


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

const ItemContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`;




const Projects = () => {

    const project_list = projects.map((item, index) => {
        return (
            <ItemContainer>
                <h4 key={index}>{item.id} - </h4>
                <h4 key={index}>{item.title}</h4>
            </ItemContainer>
        )
    });

    return (
        <PageContainer>
            <h1>Projects</h1>
            {project_list}
        </PageContainer>
    )
}

export default Projects;
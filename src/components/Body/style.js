import styled from "styled-components";


export const Container = styled.main`
    
    width: 100%;
    background-color: ${props=>props.theme.bodyBackground};
`;

export const ContainerItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;

    padding: 5rem 0;
    max-width: 64rem;
    width: 100%;
    margin: 0 auto;

`;


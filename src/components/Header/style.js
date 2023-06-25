import styled from "styled-components";
import fundo from "../../assets/fundo.png"

export const ContainerHeader = styled.header`
    
    display: block;
    
    background-image: url(${fundo});
    background-repeat: repeat;
    background-size: cover; 
    
    div{
        display: flex;
        max-width: 64rem;
        gap: 6.5rem;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 2.5rem 0;

        h1{
            text-align: center;
            max-width: 33.6875rem;

            font-size: 2.25rem;
            font-weight: 900;
            color: ${props=>props.theme.text};
        }
    }

    
`;
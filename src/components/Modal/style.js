import styled from 'styled-components'

export const Dialog = styled.div`
    display: flex;
    max-width: 64rem;
    gap: 1.5rem;
    padding: 2rem;
    background-color: ${(props)=>props.theme.text};

    position:fixed;
    z-index: 2;
    //centralizar subtraindo 50% da tela menos metade do tamanho do card
    top:calc(50% - (336px/2)); 
    
    & > img{
        width: 320px;
        height: 280px;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-between;
        
        button{
            width: fit-content;
            border: none;
            padding: 4px 6px;
            cursor: pointer;
        }
    }

    p,h2,span{
        color: white;
    }

`;

export const ContainerDialog = styled.div`
    position:absolute;
    z-index:1;
    top:0;
    
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
`;

export const CloseButton = styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

`;

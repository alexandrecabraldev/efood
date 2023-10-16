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
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        //justify-content: space-between;

        h2{
            font-size: 18px;
            font-weight: 900;
        }

        p,span{
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
        }

        button{
            background-color: ${props=>props.theme.footerBackground};
            color: ${props=>props.theme.text};
            //width: fit-content;
            text-align: center;
            width: 218px;
            height: 24px;

            border: none;
            //padding: 4px 7px;
            cursor: pointer;
            font-weight: 700;
            font-size: 14px;
            line-height: normal;
            font-style: normal;

            //margin-bottom: calc(59px - 32px);
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
    top: 8px;
    right: 8px;
    cursor: pointer;
    
`;

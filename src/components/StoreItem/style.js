import { styled } from "styled-components";

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;

    padding: 0.5rem;
    //border-radius: 6px;
    background-color: ${props=>props.theme.text};

    overflow: hidden;
    img{
        //border-radius: 6px; 
        max-width: 304px;
        height: 167px;
        object-fit: cover;
    }

    h1{
        font-weight: 900;
        font-size: 16px;
        color: ${props=>props.theme.footerBackground};
    }

    p{
        font-weight: 400;
        font-size: 14px;
        color: ${props=>props.theme.footerBackground};
        line-height: 22px;
    }
`;

export const ButtonItemStore = styled.button`
    
    padding: 4px 84px;
    color: ${props=>props.theme.text};
    font-weight: 700;
    font-size: 14px;
    border: none;
    //border-radius: 6px;
    background-color: ${props=>props.theme.footerBackground};

    cursor: pointer;
`;
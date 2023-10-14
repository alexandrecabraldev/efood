import { styled } from "styled-components";

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${props=>props.theme.text};

    overflow: hidden;
    img{
        border-radius: 6px; 
        max-width: 320px;
        height: 240px;
        object-fit: cover;
    }

    h1{
        font-weight: 900;
        font-size: 1rem;
        color: ${props=>props.theme.footerBackground};
    }

    p{
        font-size: 0.875rem;
        color: ${props=>props.theme.footerBackground};
        line-height: 1.375rem;
    }
`;

export const ButtonItemStore = styled.button`
    
    padding: 0.25rem 5.25rem;
    color: ${props=>props.theme.text};
    font-weight: 700;
    font-size: 0.875rem;
    border: none;
    border-radius: 6px;
    background-color: ${props=>props.theme.footerBackground};

    cursor: pointer;
`;
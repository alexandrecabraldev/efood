import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerProduct = styled.div`

    position: relative;
    border: 1px solid ${props=>props.theme.text};
    background-color: white;
    border-radius: 6px;
    overflow: hidden;

    & > div{
        padding: 0.5rem;
    }

    & > img{
        width: 100%;
        max-width: 480px;
        max-height: 280px;
        object-fit: cover;
        
    }
`;

export const ContainerDishTitleAndScore = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        font-weight: 700;
        color: ${props=>props.theme.text};
        font-size: 1.125rem;
    }
`;

export const ContainerScore = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    & > span{
        color: ${props=>props.theme.text};
        font-weight: 700;
        font-size: 1.125rem;
    }
`;

export const Description = styled.span`
    display: block;
    padding: 1rem 0;
    color: ${props=>props.theme.text};
    font-size: 0.875rem;
    line-height: 1.375rem;
`;

export const Button =styled(Link)`
    display: inline-block;
    text-decoration: none;

    padding: 0.25rem 0.375rem;
    color: white;
    border: none;
    background-color: ${props=>props.theme.text};
    border-radius: 6px;
    font-size: 0.875rem;

`;

export const Category = styled.div`
    padding: 0.25rem 0.375rem;
    color: white;
    border: none;
    background-color: ${props=>props.theme.text};
    border-radius: 6px;
`;

export const ContainerCategory = styled.section`
    display: flex;
    gap: 0.5rem;
    
    position: absolute;
    top:16px;
    right: 8px;
`;
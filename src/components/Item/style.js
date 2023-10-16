import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerProduct = styled.div`
    position: relative;
    border: 1px solid ${props=>props.theme.text};
    background-color: white;
    //border-radius: 6px;
    overflow: hidden;

    & > div{
        padding: 0.5rem;
        /* height: 205px; */
        /* display: flex;
        flex-direction: column;
        justify-content: space-between; */
    }

    & > img{
        width: 472px;
        height: 217px;
        /* max-width: 480px;
        max-height: 280px; */
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
        font-size: 18px;
        line-height: normal;
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
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
`;

export const Button =styled(Link)`
    display: inline-block;
    text-decoration: none;

    padding: 4px 6px;
    color: white;
    border: none;
    background-color: ${props=>props.theme.text};
    color: ${props=>props.theme.footerBackground};
    //border-radius: 6px;
    font-size: 14px;
    font-weight: 700;

`;

export const Category = styled.div`
    font-weight: 700;
    font-size: 12px;
    padding: 6px 4px;
    color: ${props=>props.theme.footerBackground};
    border: none;
    background-color: ${props=>props.theme.text};
    //border-radius: 6px;
`;

export const ContainerCategory = styled.section`
    display: flex;
    gap: 0.5rem;
    
    position: absolute;
    top:16px;
    right: 8px;
`;
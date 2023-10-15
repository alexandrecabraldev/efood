import styled from "styled-components";
import backgorundHeader from "../../assets/fundo.png"
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
    display: block;
    background-image: url(${backgorundHeader});
    background-repeat: repeat;
    background-size: cover;

`;

export const ContainerPage = styled.div`
    max-width: 64rem;
    width: 100%;
    margin: 0 auto;
    display: flex;

    align-items: center;
    justify-content: space-between;
    padding: 3rem 0;

`;

export const LinkComponent = styled(Link)`
    text-decoration: none;
        color: ${props=>props.theme.text};
        font-weight: 900;
        font-size: 1.125rem;
`;



export const ImageStore = styled.div`
    width: 100%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${props=>props.url});
    background-repeat: no-repeat;
    background-size: cover;

    & >  div{
        max-width: 64rem;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 9.75rem;
        padding: 2rem 0;
    }
`;

export const CategoryStore = styled.span`
    color: white;
    font-size: 2rem;
    font-weight: 100;
`;


export const StoreName = styled.h1`
    color: white;
    font-weight: 900;
    font-size: 2rem;

`;
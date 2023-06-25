import styled from "styled-components"

export const ContainerFooter = styled.footer`

    display: flex;
    justify-content: center;
    background-color: ${props=>props.theme.footerBackground};
`;

export const ContainerFooterCenter = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 30rem;

    & > img{
        padding-top: 2.5rem;
    }

    & > span{
        padding-bottom: 2.5rem;
        text-align: center;

        color: ${props=>props.theme.text};
        font-size:0.625rem;
    }

`;

export const ContainerSocialNetwork = styled.div`
    display: flex;
    gap: 0.5rem;
`;

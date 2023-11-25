import styled from "styled-components"

export const Form = styled.form`
    padding: 32px 8px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h3{
        margin-bottom: 16px;
        color: ${props=>props.theme.footerBackground};
        font-size: 1rem;

    }

    input{
        width: 100%;
        background-color: ${props=>props.theme.footerBackground};
        border: none;
        height: 32px;
        padding: 4px;
    }

    label{
        color: ${props=>props.theme.footerBackground};
        font-family: Roboto, sans-serif;
        font-size: 0.875rem;
        font-weight: 700;
    }
`;

export const ContainerLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`;

export const ContainerCepNumber = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 8px;
    
`;

export const ContainerCvvCardNumber = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
`;

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-top: 16px;

    button{
        background-color: ${props=>props.theme.footerBackground};
        border: none;
        padding: 4px 0;
        width: 100%;
        color: ${props=>props.theme.text};
        font-weight: 700;
        font-size: 0.875rem;
        cursor: pointer;
    }
`;

export const ContainerFinishOrder = styled.div`
    padding: 32px 8px 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
        color: ${props=>props.theme.footerBackground};
        font-size: 1rem;
        font-weight: 700;
    }

    p{
        color: ${props=>props.theme.footerBackground};
        font-size: 0.875rem;
        line-height: 1.375rem;
        font-weight: 400;
    }

    button{
        margin-top: 8px;

        background-color: ${props=>props.theme.footerBackground};
        border: none;
        padding: 4px 0;
        width: 100%;
        color: ${props=>props.theme.text};
        font-weight: 700;
        font-size: 0.875rem;
        cursor: pointer;
    }
`;

export const Loading = styled.span`
    color: ${props=>props.theme.footerBackground};
    font-size: 2rem;
    display: block;
    padding: 32px 8px 0;
`;

export const ErroMessage = styled.span`
    color: ${props=>props.theme.footerBackground};
    font-size: 2rem;
    display: block;
    padding: 32px 8px 24px;
`;

export const Button = styled.button`
    background-color: ${props=>props.theme.footerBackground};
    border: none;
    padding: 4px 0;
    width: 100%;
    color: ${props=>props.theme.text};
    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;
`;

export const Container = styled.div`
    padding: 0 8px 0;
    display: flex;
    flex-direction: column;
`;

export const ErrorMessage = styled.span`
    font-size: 14px;
    color: #B90101;
`;
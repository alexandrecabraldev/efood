import { styled } from "styled-components"

export const BackgroundCart = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);

`

export const CartMenu = styled.aside`

    position: absolute;
    top:0;
    right: 0;
    width: 22.5rem;
    height: 100%;

    background-color: ${props=>props.theme.text};

`

export const ContainerItensCart = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin: 2rem 0.5rem 0;
`;

export const ItemCart = styled.div`

    width: 100%;
    position: relative;

    div{
        display: flex;
        padding: 8px 8px 12px;

        background-color: ${props=>props.theme.footerBackground};
        
        img:first-child{
            width: 80px;
            height: 80px;
            object-fit: cover;
        }


        div{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            h3{
                color: ${props=>props.theme.text};
                font-size: 1.125rem;
                font-weight: 900;
            }

            span{
                font-size: 0.875rem;
                font-weight: 400;
                line-height: 1.375rem;
                color: ${props=>props.theme.text};
            }
        }
    }

`;

export const TrashImage = styled.img`
    width: 16px;
    height: 16px;
    position:absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;

`;

export const ContainerTotalCart = styled.div`

    margin-top: 1.5rem;

    div{
        display: flex;
        justify-content: space-between;

        span{
            color: ${props=>props.theme.footerBackground};
            font-size: 0.875rem;
            font-weight: 700;
        }
    }

    button{
        margin-top: 1rem;
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
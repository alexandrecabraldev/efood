import { ContainerProduct, ContainerCategory, Category, ContainerDishTitleAndScore, ContainerScore, Description, Button } from "./style";
import PropTypes from "prop-types"

import estrela from "../../assets/estrela.svg"

Item.propTypes={
    id:PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    starRating: PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    capa:PropTypes.string.isRequired,
    highlight:PropTypes.bool,
}

export function Item(props){
    
    const url = new URL(props.capa);
    const pathParts = url.pathname.split('/')
    const partUrlNameStore = pathParts[2];
    const format = pathParts[pathParts.length-1].split('.')
    //console.log(format[format.length-1])

    return(
        <ContainerProduct>

                <ContainerCategory>
                    {props.highlight && <Category>Destaque da semana</Category>}
                    <Category>{props.category}</Category>
                </ContainerCategory>

                <img src={props.image} alt=""/>
                

                <div>
                    <ContainerDishTitleAndScore>
                        <h2>{props.title}</h2>
                        <ContainerScore>
                            <span>
                                {props.starRating}
                            </span>
                            <img src={estrela} alt="imagem de uma estrela dourada"/>
                        </ContainerScore>
                    </ContainerDishTitleAndScore>
    
                    <Description>
                        {props.description}
                    </Description>
    
                    <Button to={`/${props.id}/${props.category}/${props.title}/${partUrlNameStore}/${format[format.length-1]}`}>Saiba mais</Button>
                </div>
        </ContainerProduct>
    );
}
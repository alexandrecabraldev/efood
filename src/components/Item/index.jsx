import { ContainerProduct, ContainerCategory, Category, ContainerDishTitleAndScore, ContainerScore, Description, Button } from "./style";
import PropTypes from "prop-types"

Item.propTypes={
    image: PropTypes.string.isRequired,
    starRating: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlight:PropTypes.bool,
}

export function Item(props){
    return(
        <ContainerProduct>

                <ContainerCategory>
                    {props.highlight && <Category>Destaque da semana</Category>}
                    <Category>{props.category}</Category>
                </ContainerCategory>

                <img src={props.image} alt="imagem de um sushi no prato sendo pego por dois palitinhos para consumo"/>
                

                <div>
                    <ContainerDishTitleAndScore>
                        <h2>{props.title}</h2>
                        <ContainerScore>
                            <span>
                                4.9
                            </span>
                            <img src={props.starRating} alt="imagem de uma estrela dourada"/>
                        </ContainerScore>
                    </ContainerDishTitleAndScore>
    
                    <Description>
                        {props.description}
                    </Description>
    
                    <Button to={`/${props.category}/${props.title}`}>Saiba mais</Button>
                </div>
            </ContainerProduct>
    );
}
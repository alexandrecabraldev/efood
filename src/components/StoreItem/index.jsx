import { Item, ButtonItemStore } from "./style";
import PropTypes from "prop-types"

StoreItem.propTypes={
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired,
}

export function StoreItem(props){

    return(
        
            <Item>
        
                <img src={props.picture} alt="foto da pizza"/>

                <h1>
                    {props.title}
                </h1>

                <p>
                    {props.description}
                </p>

                <ButtonItemStore>Adicionar ao carrinho</ButtonItemStore>
            </Item>
    );
}
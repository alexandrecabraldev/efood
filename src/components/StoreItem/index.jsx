import { Item, ButtonItemStore } from "./style";
import PropTypes from "prop-types"

StoreItem.propTypes={
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired,
    handleClick:PropTypes.func,
    price: PropTypes.number.isRequired,
    porcao: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export function StoreItem(props){

    function handleClickButtonItemStore(){
        // console.log(props.id)
        props.handleClick(props.picture, props.title, props.description, props.price, props.porcao, props.id)
    }

    return(
        
            <Item>
        
                <img src={props.picture} alt="foto da pizza"/>

                <h1>
                    {props.title}
                </h1>

                <p>
                    {props.description}
                </p>

                <ButtonItemStore 
                    onClick={handleClickButtonItemStore}>
                    Adicionar ao carrinho
                </ButtonItemStore>
            </Item>
    );
}
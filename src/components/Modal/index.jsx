import close from "../../assets/close.png"
import { Dialog, CloseButton } from "./style"
import PropsTypes from 'prop-types'

Modal.propTypes ={
    //open: PropsTypes.bool.isRequired,
    handleClickAddCart: PropsTypes.func.isRequired,
    handleClick:PropsTypes.func,
    picture:PropsTypes.string.isRequired,
    title:PropsTypes.string.isRequired,
    description:PropsTypes.string.isRequired,
    price:PropsTypes.number.isRequired,
    porcao:PropsTypes.string.isRequired,
    id:PropsTypes.number.isRequired,
}

export function Modal(props){

    const priceFormated = props.price.toLocaleString('pt-br',{
        style:'currency',
        currency:'BRL',
    })

    function handleClick(){
        props.handleClick()
    }

    function handleClickCart(){
        props.handleClickAddCart(props.picture, props.title, props.price, props.id)
    }

    return(

        <Dialog>
            <CloseButton onClick={handleClick}>
                <img src={close}/>
            </CloseButton>
            <img src={props.picture}/>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <span>Serve: de {props.porcao}</span>
                <button onClick={handleClickCart}>Adicionar ao carrinho - {priceFormated}</button>
            </div>
        </Dialog>

    )
}
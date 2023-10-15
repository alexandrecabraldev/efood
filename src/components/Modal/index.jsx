import close from "../../assets/close.png"
import { Dialog, CloseButton } from "./style"
import PropsTypes from 'prop-types'

Modal.propTypes ={
    open: PropsTypes.bool.isRequired,
    handleClick:PropsTypes.func,
    picture:PropsTypes.string.isRequired,
    title:PropsTypes.string.isRequired,
    description:PropsTypes.string.isRequired,
    price:PropsTypes.number.isRequired,
    porcao:PropsTypes.string.isRequired,
}

export function Modal(props){

    const priceFormated = props.price.toLocaleString('pt-br',{
        style:'currency',
        currency:'BRL',
    })

    console.log(priceFormated);

    function handleClick(){
        props.handleClick()
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
                <span>Serve: {props.porcao}</span>
                <button>Adicionar ao carrinho - {priceFormated}</button>
            </div>
        </Dialog>

    )
}
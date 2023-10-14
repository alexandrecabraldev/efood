import close from "../../assets/close.png"
import { Dialog, CloseButton } from "./style"
import PropsTypes from 'prop-types'

Modal.propTypes ={
    open: PropsTypes.bool.isRequired,
    handleClick:PropsTypes.func,
}

export function Modal(props){

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
                <span>Serve: de 2 a 3 pessoas</span>
                <button>Adicionar ao carrinho - R$ 60,90</button>
            </div>
        </Dialog>

    )
}
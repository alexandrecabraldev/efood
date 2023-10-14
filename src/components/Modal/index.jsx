import pizza from "../../assets/pizza.png"
import close from "../../assets/close.png"
import { Dialog, CloseButton } from "./style"
import PropsTypes from 'prop-types'

Modal.propTypes ={
    open: PropsTypes.bool.isRequired,
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
            <img src={pizza}/>
            <div>
                <h2>Pizza Marguerita</h2>
                <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                <span>Serve: de 2 a 3 pessoas</span>
                <button>Adicionar ao carrinho - R$ 60,90</button>
            </div>
        </Dialog>

    )
}
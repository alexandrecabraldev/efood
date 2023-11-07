import { BackgroundCart, CartMenu, ContainerItensCart, ItemCart, TrashImage, ContainerTotalCart } from "./style"
import trash from "../../assets/lixeiraReciclagem.png"
import PropTypes from "prop-types"
// import { useState } from "react"

Cart.propTypes={
    handleClickCart:PropTypes.func.isRequired,
    cartInform: PropTypes.array.isRequired,
    removeItemCart:PropTypes.func.isRequired,
    cartTotalPrice:PropTypes.number.isRequired,
}

export function Cart(props){

    return (
        <>
            <BackgroundCart onClick={props.handleClickCart}>  
                
            </BackgroundCart>

            <CartMenu>
                    <ContainerItensCart>

                        {
                            props.cartInform.map(item=>{
                                return (
                                    <ItemCart key={item.title}>
                                    <div>
                                        <img src={`${item.picture}`}/>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <span>{item.price}</span>
                                        </div>
                                        <TrashImage src={trash} onClick={()=>props.removeItemCart(item.title)}/>
                                    </div>
                                </ItemCart>
                                )
                            })
                        }              

                        <ContainerTotalCart>
                            <div>
                                <span>Valor total</span>
                                <span>R$ {props.cartTotalPrice.toFixed(2)}</span>
                            </div>
                            <button>Continuar com a entrega</button>
                        </ContainerTotalCart>
                    </ContainerItensCart>
                </CartMenu>
        </>
    )
}
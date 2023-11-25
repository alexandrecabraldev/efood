import { BackgroundCart, CartMenu, ContainerItensCart, ItemCart, TrashImage, ContainerTotalCart, EmptyCart } from "./style"
import trash from "../../assets/lixeiraReciclagem.png"

import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../../redux/isCartOpen";
import { removeCartItem } from "../../redux/cartSlice";
import { useEffect,useState } from "react";
import { Payment } from "../Payment";
import { changePayment } from "../../redux/isPaymentOpen";
import { changeAdressEdit } from "../../redux/isAdressEditOpen";


export function Cart(){

    const [totalPriceCart, setTotalPriceCart] = useState(0);
    const isPaymentOpen = useSelector((state)=>state.isPaymentOpen)
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const adressEdit = useSelector((state)=>state.isAdressEditOpen);


    useEffect(()=>{

        setTotalPriceCart( 
            cart.reduce((acc,item)=>{
                return acc + item.price;
            },0)
        )
    },[cart]);

    function handleClickCart(){

        if(adressEdit!=null){
            dispatch(changeCart(false))
            dispatch(changePayment(false))
            dispatch(changeAdressEdit(true))
        }
        // console.log('clicou para sair do cart');
    }

    function removeItemCart(title){

        dispatch(removeCartItem(title))
        // console.log(`removeu o item ${title} do carrinho`)
    }

    function handleClickGoToPayment(){
        dispatch(changePayment(!isPaymentOpen))
    }

    return (
        <>
            <BackgroundCart onClick={handleClickCart}>  
                
            </BackgroundCart>

            <CartMenu>
                {isPaymentOpen ? <Payment totalPriceCart={totalPriceCart} />
                
                :   <ContainerItensCart>

                        {
                            cart.map(item=>{
                                return (
                                    <ItemCart key={item.title}>
                                        <div>
                                            <img src={`${item.picture}`}/>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <span>R$ {item.price.toFixed(2)}</span>
                                            </div>
                                            <TrashImage 
                                                src={trash} 
                                                onClick={()=>removeItemCart(item.title)}
                                            />
                                        </div>
                                    </ItemCart>
                                )
                            })
                        }              

                        <ContainerTotalCart>
                            { cart.length!=0 ?
                                <div>
                                    <span>Valor total</span>
                                    <span>R$ {totalPriceCart.toFixed(2)}</span>
                                </div>
                                :
                                <EmptyCart>Carrinho Vazio</EmptyCart>
                            }
                            <button onClick={handleClickGoToPayment} disabled={cart.length===0 ? true: false}>Continuar com a entrega</button>
                        </ContainerTotalCart>
                    </ContainerItensCart>
                }
            </CartMenu>
        </>
    )
}
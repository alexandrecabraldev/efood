import { BackgroundCart, CartMenu, ContainerItensCart, ItemCart, TrashImage, ContainerTotalCart } from "./style"
import trash from "../../assets/lixeiraReciclagem.png"

import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../../redux/isCartOpen";
import { removeCartItem } from "../../redux/cartSlice";
import { useEffect,useState } from "react";

export function Cart(){

    const [totalPriceCart, setTotalPriceCart] = useState(0);
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{

        setTotalPriceCart( 
            cart.reduce((acc,item)=>{
                return acc + item.price;
            },0)
        )

    },[cart]);

    function handleClickCart(){
        dispatch(changeCart(false))
        console.log('clicou para sair do cart');
    }

    function removeItemCart(title){

        dispatch(removeCartItem(title))
        console.log(`removeu o item ${title} do carrinho`)
    }

    return (
        <>
            <BackgroundCart onClick={handleClickCart}>  
                
            </BackgroundCart>

            <CartMenu>
                    <ContainerItensCart>

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
                            <div>
                                <span>Valor total</span>
                                <span>R$ {totalPriceCart.toFixed(2)}</span>
                            </div>
                            <button>Continuar com a entrega</button>
                        </ContainerTotalCart>
                    </ContainerItensCart>
                </CartMenu>
        </>
    )
}
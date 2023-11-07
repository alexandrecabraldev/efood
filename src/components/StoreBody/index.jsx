import { Container } from "../Body/style";
import { StoreItem } from "../StoreItem";
import {ContainerStoreItem} from "./style";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { apiUrl } from "../Body";
import { Modal } from "../Modal";
import { ContainerDialog } from "../Modal/style";
import { Cart } from "../Cart";

export function StoreBody(){

    const {id} = useParams();
    const [data, setData] = useState({});
    const [openModal, setOpenModal] =  useState(false)
    const [modalInformation,setModalInformation] = useState({})
    const [openCart, setOpenCart] = useState(false);
    const [cartInformation, setCartInformation] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    async function api(){
        const response = await fetch(apiUrl)
        const dataJson = await response.json();
        setData(dataJson[id-1]);
    }

    useEffect(()=>{
        api()
    },[]);

    function handleClickItem(picture, title, description, price, porcao){
        setOpenModal(!openModal)
        setModalInformation({
            modalPicture:picture,
            modalTitle: title,
            modalDescription: description,
            modalPrice: price,
            modalPorcao: porcao,
        })
    }

    function handleClickAddCart(picture, title, price){

        const priceUnformated = parseFloat(price.replace("R$", "").replace(",", "."));

        setOpenModal(false);
        setOpenCart(true);

        const isItemDuplicatied = cartInformation.some(item=>item.title===title);

        if(isItemDuplicatied){
            return alert('Este ítem já está adicionado no carrinho, tente outro');
        }

        setCartInformation(state=>[...state,{
            title,
            picture,
            price
        }])
        setCartTotalPrice(state=>state + priceUnformated)
        console.log('add ao carrinho')
    }

    function handleClickCart(){
        setOpenCart(!openCart);
        console.log('clicou para sair do cart');
    }

    function removeItemCart(title){

        setCartInformation(cartInformation.filter(item=>{
            return item.title!==title;
        }));

        console.log(`removeu o item ${title} do carrinho`)
    }

    return(
        <Container>
            {openModal && <ContainerDialog/>}
            <ContainerStoreItem>
                {
                    openModal &&
                    <Modal 
                        //open={openModal} 
                        handleClick={handleClickItem}
                        handleClickAddCart={handleClickAddCart}
                        picture={modalInformation.modalPicture}
                        title={modalInformation.modalTitle}
                        description={modalInformation.modalDescription}
                        price={modalInformation.modalPrice}
                        porcao={modalInformation.modalPorcao}
                    />
                }

                { openCart &&
                    <Cart
                        handleClickCart={handleClickCart}
                        cartInform={cartInformation}
                        removeItemCart={removeItemCart}
                        cartTotalPrice={cartTotalPrice}
                    />
                }

                {
                    data.cardapio && data.cardapio.map((item)=>{
                        return(
                            <StoreItem
                                key={item.id}
                                title = {item.nome}
                                description = {item.descricao}
                                picture={item.foto}
                                price={item.preco}
                                porcao={item.porcao}
                                handleClick={handleClickItem}
                            />
                            )
                        })
                    }

            </ContainerStoreItem>

        </Container>
    
    );
}
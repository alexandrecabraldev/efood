import { Container } from "../Body/style";
import { StoreItem } from "../StoreItem";
import {ContainerStoreItem} from "./style";

import { useParams } from "react-router-dom";
import { useState } from "react";

import { Modal } from "../Modal";
import { ContainerDialog } from "../Modal/style";
import { Cart } from "../Cart";

import {useGetRestaurantByIdQuery} from "../../redux/apiStore.js"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { changeCart } from "../../redux/isCartOpen";

export function StoreBody(){

    const {id} = useParams();
    const [openModal, setOpenModal] =  useState(false);
    const [modalInformation,setModalInformation] = useState({});

    const {data, isLoading} = useGetRestaurantByIdQuery(id);

    const cart = useSelector((state)=>state.cart);
    const isCartOpen = useSelector((state)=>state.isCartOpen);

    const dispatch = useDispatch();


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

        // const priceUnformated = parseFloat(price.replace("R$", "").replace(",", "."));
        
        setOpenModal(false);
        dispatch(changeCart(true))

        const isItemDuplicatied = cart.some(item=>item.title===title);

        if(isItemDuplicatied){
            return alert('Este ítem já está adicionado no carrinho, tente outro');
        }

        dispatch(addToCart({
            picture,
            title,
            price,
        }))
        
        console.log('add ao carrinho')
    }

    return(
        <Container>
            {openModal && <ContainerDialog/>}
            <ContainerStoreItem>
                {
                    openModal &&
                    <Modal 
                        handleClick={handleClickItem}
                        handleClickAddCart={handleClickAddCart}
                        picture={modalInformation.modalPicture}
                        title={modalInformation.modalTitle}
                        description={modalInformation.modalDescription}
                        price={modalInformation.modalPrice}
                        porcao={modalInformation.modalPorcao}
                    />
                }

                { isCartOpen &&
                    <Cart/>
                }

                {
                    isLoading ?(<h1>Carregando...</h1>):
                    (
                        data.cardapio.map((item)=>{
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
                    )
                    }

            </ContainerStoreItem>

        </Container>
    
    );
}
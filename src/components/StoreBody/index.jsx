import { Container } from "../Body/style";
import { StoreItem } from "../StoreItem";
import {ContainerStoreItem} from "./style";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { apiUrl } from "../Body";
import { Modal } from "../Modal";
import { ContainerDialog } from "../Modal/style";

export function StoreBody(){

    const {id} = useParams();
    const [data, setData] = useState({});
    const [openModal, setOpenModal] =  useState(false)

    async function api(){
        const response = await fetch(apiUrl)
        const dataJson = await response.json();
        setData(dataJson[id-1]);
    }

    useEffect(()=>{
        api()
    },[]);

    function handleClickItem(){
        setOpenModal(!openModal)
    }

    console.log(data)

    return(
        <Container>
            {openModal && <ContainerDialog/>}
            <ContainerStoreItem>
                {
                    openModal &&
                    <Modal 
                        open={openModal} 
                        handleClick={handleClickItem}
                    />}
                {
                    data.cardapio && data.cardapio.map((item)=>{
                        return(
                            <StoreItem
                                key={item.id}
                                title = {item.nome}
                                description = {item.descricao}
                                picture={item.foto}
                                handleClick={handleClickItem}
                            />
                            )
                        })
                    }

            </ContainerStoreItem>

        </Container>
    
    );
}
import { Container } from "../Body/style";
import { StoreItem } from "../StoreItem";
import {ContainerStoreItem} from "./style";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { apiUrl } from "../Body";

export function StoreBody(){

    const {id} = useParams();
    const [data, setData] = useState({});

    async function api(){
        const response = await fetch(apiUrl)
        const dataJson = await response.json();
        setData(dataJson[id-1]);
        //console.log(typeof dataJson[id-1])
    }

    useEffect(()=>{
        api()
    },[]);

    console.log(data)

    return(
        <Container>
            <ContainerStoreItem>

                {
                    data.cardapio && data.cardapio.map((item)=>{
                        return(
                            <StoreItem
                                key={item.id}
                                title = {item.nome}
                                description = {item.descricao}
                                picture={item.foto}
                            />
                        )
                    })
                }
                
            </ContainerStoreItem>

        </Container>
    );
}
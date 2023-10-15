import { Container, ContainerItem } from "./style";

import { Item } from "../Item";
import { useEffect } from "react";
import { useState } from "react";

export const apiUrl = 'https://fake-api-tau.vercel.app/api/efood/restaurantes';

export function Body(){

    const [dataApi, setDataApi] = useState([]);
    
    async function callApi(){
        const response = await fetch(apiUrl);
        const dataJson = await response.json();
        setDataApi(dataJson);
    }

    useEffect(()=>{
        callApi();
    },[])

    return(
        <Container>
            <ContainerItem>
                {
                    dataApi.map((item)=>{

                        return (
                            <Item 
                                key={item.id}
                                id={item.id}
                                image={item.capa}
                                starRating={item.avaliacao}
                                title={item.titulo}
                                description={item.descricao}
                                category={item.tipo}
                                capa={item.capa}
                                highlight = {item.destacado}
                            />
                        )
                    })
                }
    
            </ContainerItem>
        </Container>
    );
}
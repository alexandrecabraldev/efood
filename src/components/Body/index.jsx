import { Container, ContainerItem } from "./style";

import produto2 from "../../assets/produto2.png"
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
        callApi()
    },[])

    return(
        <Container>
            <ContainerItem>
                {
                    dataApi.map((item)=>{
                        let highlight = true;

                        if(item.id===1){
                            highlight = true;
                        }else{
                            highlight = false;
                        }

                        return (
                            <Item 
                                key={item.id}
                                id={item.id}
                                image={item.capa}
                                starRating={item.avaliacao}
                                title={item.titulo}
                                description={item.descricao}
                                category={item.tipo}
                                highlight = {highlight}
                            />
                        )
                    })
                }
                
                <Item 
                    image={produto2} 
                    starRating={4.9}
                    title="La Dolce Vita Trattoria"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                    category="Italiana"
                />
    
                <Item 
                    image={produto2} 
                    starRating={4.9}
                    title="La Dolce Vita Trattoria"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                    category="Italiana"
                />
    
            </ContainerItem>
        </Container>
    );
}
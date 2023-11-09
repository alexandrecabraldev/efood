import { Container, ContainerItem } from "./style";

import { Item } from "../Item";
import { useGetAllRestaurantsQuery } from "../../redux/apiStore";

export const apiUrl = 'https://fake-api-tau.vercel.app/api/efood/restaurantes';

export function Body(){

    const {data, isLoading} = useGetAllRestaurantsQuery();

    if(!isLoading){
        console.log(data)
    }

    return(
        <Container>
            <ContainerItem>
                {   
                    isLoading ? 
                    
                        <h1>Loading . . . </h1> :
                        
                        data.map((item)=>{

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
import { CategoryStore, ContainerHeader, ContainerPage, ImageStore, StoreName } from "./style";
import logoEfood from "../../assets/logo.png"
import { useParams } from "react-router-dom";
import { LinkComponent } from "./style.js";
import { useGetRestaurantByIdQuery } from "../../redux/apiStore";
import { useSelector } from "react-redux";

export function StoreHeader(){

    const { id } = useParams();

    const cart = useSelector((state)=>state.cart)
    const { data,isLoading } = useGetRestaurantByIdQuery(id);

    if(!isLoading){
        console.log(data);
        console.log("tamanho do carrinho: "+cart.length)
    }
    

    return(
        <>
            {   !isLoading && 
                    <ContainerHeader>
                        <ContainerPage>
                            <LinkComponent to="/">Restaurantes</LinkComponent>

                            <img src={logoEfood} alt="logo do efood"/>

                            <LinkComponent to="#">{cart.length} produto(s) no carrinho</LinkComponent>
                        </ContainerPage>

                        <ImageStore 
                            url={data.capa}>

                            <div>
                                <CategoryStore>
                                    {data.tipo}
                                </CategoryStore>
                
                                <StoreName>
                                    {data.titulo}
                                </StoreName>
                            </div>

                        </ImageStore>
                    </ContainerHeader>
            }
        </>
    );
}
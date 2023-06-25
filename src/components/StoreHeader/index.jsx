import { CategoryStore, ContainerHeader, ContainerPage, ImageStore, StoreName } from "./style";
import logoEfood from "../../assets/logo.png"
import { useParams } from "react-router-dom";
import { LinkComponent } from "./style.js";

export function StoreHeader(){

    const { category,storeName } = useParams();

    return(
        <ContainerHeader>
            <ContainerPage>
                <LinkComponent to="/">Restaurantes</LinkComponent>

                <img src={logoEfood} alt="logo do efood"/>

                <LinkComponent to="#">0 produto(s) no carrinho</LinkComponent>
            </ContainerPage>

            <ImageStore>

                <div>
                    <CategoryStore>
                        {category}
                    </CategoryStore>
    
                    <StoreName>
                        {storeName}
                    </StoreName>
                </div>

            </ImageStore>
        </ContainerHeader>
    );
}
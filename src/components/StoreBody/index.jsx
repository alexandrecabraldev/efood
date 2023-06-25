import { Container } from "../Body/style";
import { StoreItem } from "../StoreItem";
import {ContainerStoreItem} from "./style";

export function StoreBody(){
    return(
        <Container>
            <ContainerStoreItem>
                <StoreItem/>
                <StoreItem/>
                <StoreItem/>
                
                <StoreItem/>
                <StoreItem/>
                <StoreItem/>
            </ContainerStoreItem>

        </Container>
    );
}
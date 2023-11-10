import { StoreHeader } from "../StoreHeader";
import {Footer} from "../Footer"
import { Container } from "../Body/style";
import { StoreBody } from "../StoreBody";



export function StorePage(){

    return (
        <>
            <StoreHeader/>
                <Container>
                    <StoreBody/>
                </Container>
            <Footer/>
        </>
    );
}
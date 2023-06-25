import { Item, ButtonItemStore } from "./style";
import pizza from "../../assets/pizza.png"

export function StoreItem(){
    return(
        
            <Item>
                <img src={pizza} alt="foto da pizza"/>

                <h1>
                    Pizza Marguerita
                </h1>

                <p>
                    A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
                </p>

                <ButtonItemStore>Adicionar ao carrinho</ButtonItemStore>
            </Item>
    );
}
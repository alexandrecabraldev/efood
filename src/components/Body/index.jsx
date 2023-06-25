import { Container, ContainerItem } from "./style";
import produto from "../../assets/produto.png"
import estrela from "../../assets/estrela.svg"
import produto2 from "../../assets/produto2.png"
import { Item } from "../Item";

export function Body(){
    return(
        <Container>
            <ContainerItem>
                <Item 
                    image={produto} 
                    starRating={estrela}
                    title="Hioki Sushi "
                    description="Peça R$ 1,99 já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
                    category="Japonesa"
                    highlight
                />
                
                <Item 
                    image={produto2} 
                    starRating={estrela}
                    title="La Dolce Vita Trattoria"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                    category="Italiana"
                />
    
                <Item 
                    image={produto2} 
                    starRating={estrela}
                    title="La Dolce Vita Trattoria"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                    category="Italiana"
                />
    
                <Item 
                    image={produto2} 
                    starRating={estrela}
                    title="La Dolce Vita Trattoria"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                    category="Italiana"
                />
    
                <Item 
                    image={produto2} 
                    starRating={estrela}
                    title="La Dolce Vita Trattoria"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                    category="Italiana"
                />
    
                <Item 
                    image={produto2} 
                    starRating={estrela}
                    title="La Dolce Vita Trattoria"
                    description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
                    category="Italiana"
                />
            </ContainerItem>
        </Container>
    );
}
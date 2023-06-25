import { ContainerHeader } from "./style.js"
import Logo from "../../assets/logo.png"

export function Header(){

    return( 

        <ContainerHeader>
            <div>
                <img src={Logo} alt="Logo do efood que consiste no nome efood ao lado de um garfo e faca na vertical"/>
    
                <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
            </div>
        </ContainerHeader>
    
    )
}
import { ContainerFooter, ContainerSocialNetwork, ContainerFooterCenter } from "./style";
import efoodLogo from "../../assets/logo.png"
import instagramLogo from "../../assets/instagram.svg"
import facebookLogo from "../../assets/facebook.svg"
import twitterLogo from "../../assets/twitter.svg"

export function Footer(){
    return(
        <ContainerFooter>
            <ContainerFooterCenter>
                <img src={efoodLogo} alt="logo do efood, que contém o nome efood ao lado de um garfo e uma faca na vertical"/>
    
                <ContainerSocialNetwork>
                    <img src={instagramLogo} alt="logo do instagram"/>
                    <img src={facebookLogo} alt="logo do facebook"/>
                    <img src={twitterLogo} alt="logo do twitter"/>
                </ContainerSocialNetwork>
    
                <span>
                    A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
                </span>
            </ContainerFooterCenter>
        </ContainerFooter>
    );
}
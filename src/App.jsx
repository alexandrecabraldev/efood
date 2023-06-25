import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

/*
    *Informações para legibilidade do código 

    -O página web até momento só tem 2 páginas, a Home e a página da loja fictícia.
    -Todos os components com o nome 'Store', ex: StoreHeader, são da página da loja fictícia.
    -Todo o resto é da home page. 
    -O component main está a estrutura das rotas usando o react-router-dom.
*/
function App() {

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './components/global/GlobalStyle.js'
import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from './components/global/GlobalTheme.js';
import { StorePage } from './components/StorePage/index.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*
    *Informações para legibilidade do código 

    -O página web até momento só tem 2 páginas, a Home e a página da loja fictícia.
    -Todos os components com o nome 'Store', ex: StoreHeader, são da página da loja fictícia.
    -Todo o resto é da home page. 
    -O component main está a estrutura das rotas usando o react-router-dom.
    -A pasta global contém toda a estilização global da aplicação.

*/

const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
  },
  {
    path:'/:id/:category/:storeName',
    element: <StorePage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={GlobalTheme}>
      <RouterProvider router={router}/>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)

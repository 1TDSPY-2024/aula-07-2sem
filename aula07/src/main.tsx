import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import App from './App.tsx'
import Home from './routes/Home/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import Error from './routes/Error/index.tsx'

//criando array de objeto de rotas

const routes = createBrowserRouter([
  {path:"/",element:<App/>,errorElement:<Error/>,children:[
    {path:"/",element:<Home/>},
    {path:"/produtos",element:<Produtos/>},
    {path:"/editar/prodtuos/:id",element:<EditarProdutos/>},
   
  ]}

])

//chamando classe routerPRovider e colocando o valor do metodo router igual a nossa constante
//com os caminhos

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)

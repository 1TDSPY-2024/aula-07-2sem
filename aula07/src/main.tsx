import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import App from './App.tsx'
import Home from './routes/Home/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import Error from './routes/Error/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

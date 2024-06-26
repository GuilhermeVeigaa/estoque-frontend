import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.tsx'
import Home from './routes/Home.tsx'
import Register from './routes/Register.tsx'
import Login from './routes/Login.tsx'
import Estoque from './routes/Estoque.tsx'
import Produtos from './routes/Produtos.tsx'
import Vendas from './routes/Vendas.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }, 
    ]
  },
  {
    path: "estoque",
    element: <Estoque />
  },
  {
    path: "produtos",
    element: <Produtos />
  },
  {
    path: "logs",
    element: <Vendas />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

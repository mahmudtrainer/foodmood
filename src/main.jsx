import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import MenuCard from './Components/Home/MenuCard.jsx'
import Registration from './Components/Firebase/Auth/Registration.jsx'
import LogIn from './Components/Firebase/Auth/LogIn.jsx'
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx'
import AddProduct from './Components/Add Product/AddProduct.jsx'
import AddProduct2 from './Components/Add Product/AddProduct2.jsx'


const routes = createBrowserRouter([
  {
    path : "/",
    element : <App></App>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : '/menu',
        element : <MenuCard></MenuCard>,
        loader : ()=>{ return fetch('../public/foods.json')}
      },
      {
        path : "/registration",
        element : <Registration></Registration>
      },
      {
        path : '/login',
        element : <LogIn></LogIn>
      },
      {
        path : "/add-product",
        element : <AddProduct2></AddProduct2>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI>
    <RouterProvider router={routes}>
    <App />
    </RouterProvider>
    </ContextAPI>
  </React.StrictMode>,
)

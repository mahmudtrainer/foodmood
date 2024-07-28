import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import MenuCard from './Components/Home/MenuCard.jsx'


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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)

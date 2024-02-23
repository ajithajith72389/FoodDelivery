// import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
// import Navbar from './Components/Navbar'
import "./Components/style.css"
// import Hero from './Components/Hero'
// import Delivery from './Components/Delivery'
// import Healthy from './Components/Healthy'
// import ProductSlider from './Components/ProductSlider'
// import Products from './Components/Products'
// import Footer from './Components/Footer'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FrontPage from "./FrontPage"
import AllProducts from "./Components/AllProducts"
import Vegetables from "./Components/Vegetables"
import Delivery from "./Components/Delivery"
import Fruits from "./Components/Fruits"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Cart from "./Components/Cart"

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <FrontPage />,

  },
  {
    path: "/product",
    element: <AllProducts />
  },
  {
    path: "/vegetables",
    element: <Vegetables />
  },

  {
    path: "/about",
    element: <Delivery />
  },
  {
    path: "/fruits",
    element: <Fruits />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/cart",
    element: <Cart />
  }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

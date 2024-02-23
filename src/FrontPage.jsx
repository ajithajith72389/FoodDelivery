import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Delivery from "./Components/Delivery"
import Healthy from "./Components/Healthy"
import ProductSlider from "./Components/ProductSlider"
import Products from "./Components/Products"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"

const FrontPage =()=>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Delivery/>
        <Healthy/>
        <ProductSlider/>
        <Products/>
        <Footer/>
        <Outlet/>
        </>
    )
}

export default FrontPage
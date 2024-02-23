import React from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/Images/Sabzi.png"
const Navbar = () => {
    return (
        <div className="container-fluid px-5 header sticky-top">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
                <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={Logo} alt="" />
                </Link>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to={"/"} class="nav-link px-2 menu-color">Home</Link></li>
                    <li><Link to={"/product"} class="nav-link px-2 menu-color">Product</Link></li>
                    <li><Link to={"/about"} class="nav-link px-2 menu-color">About</Link></li>
                </ul>
                
                <div class="text-end">
                    <Link to={"/login"} type="button" class="btn btn-success text-light me-2 rounded">Login</Link >
                    <Link to={"/register"} type="button" class="btn btn-warning rounded">Sign-up</Link >
                </div>
            </header>
        </div>
    )
}

export default Navbar
import React from "react"
import Heroimage from "../assets/NewImage/hero1.png"
import Certificate from "../assets/Images/certi.png"
import { Link } from "react-router-dom"
const Hero=()=>{
    return(
        <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
            <div className="row flex-lg-row-reverse align-items-center g-5 ">
                <div className="col-10 col-sm-8 col-lg-5">
                    <img src={Heroimage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6 py-5 hero-text">
                    <h1 className="display-1 fw-bold lh-1 mb-3"><span>Fresh Fruits & Vegetables Online Delivery</span></h1>
                    <div className="d-flex align-items-center my-5">
                        <img src={Certificate} alt="" className="me-3" />
                        <p className="fw-bold">We deliver organic Fresh Fruits & Vegetable from
                            <br />our fields to your doorstep.</p>

                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link to={"/vegetables"} type="button" className="btn btn-warning btn-lg px-4 me-md-2 rounded">Shop Your Vegetables</Link>
                        <Link to={"/fruits"} type="button" className="btn btn-success text-light btn-lg px-4 rounded">Shop Your Fruits</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero
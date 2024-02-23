import React, { useState } from "react"
import Swal from "sweetalert2"
const AllProduct =(props)=>{
    const [count, setCount] = useState(0)

    const increament =()=>{
        setCount(count+1)
    }

    const decreament =()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            alert("Minimum Quantity is 1")
        }
    }
    const handleClick=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to buy this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I am sure"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Thank You",
                    text: "Your product reaches you soon",
                    icon: "success"
                });
            }
        });
    }

    return(
        <div className='col-12 col-md-4 all-product'>
            <div className='p-1 col-12 row mt-3'>
                <div className={"border shadow-sm p-3 ms-3 text-light rounded-2 product"}>
                    <div className="product-image">
                        <img src={props.Image} alt="" className='w-75 h-75' />
                    </div>
                    <h3>{props.Name}</h3>
                    <p>{props.Price}</p>
                    <div className="col-12 d-flex justify-content-center">
                        <h3>Quantity: {count}</h3>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn bg-primary rounded-1" onClick={decreament}><strong>-</strong></button>
                        <button className='btn bg-warning rounded-2 w-75' onClick={handleClick}>Buy Now</button>
                        <button className="btn bg-primary rounded-1" onClick={increament}><strong>+</strong></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProduct
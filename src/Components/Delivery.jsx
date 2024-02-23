import React from "react"
import Process1 from "../assets/Images/process1.png"
import Process2 from "../assets/Images/process2.png"
import Process3 from "../assets/Images/process3.png"
const Delivery =()=>{
    return(
        <div className="container-fluid px-4 py-5 delivery-process" >
            <h2 className="text-center display-4 mt-4 fw-bold">How Delivery Works</h2>
            <div className="row g-4 py-5 row-cols-sm-2 row-cols-md-3">
                <div className="col px-5 text-center">
                    <div className="mb-3">
                        <img src={Process1} alt="" className="h-50 w-50" />
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                </div>
                <div className="col px-5 text-center">
                    <div className="mb-3">
                        <img src={Process2} alt="" className="h-50 w-50" />
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                </div>
                <div className="col px-5 text-center">
                    <div className="mb-3">
                        <img src={Process3} alt="" className="h-50 w-50" />
                    </div>
                    <h2>Featured title</h2>
                    <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                </div>
            </div>
        </div>
    )
}

export default Delivery
import React from "react"
import Vegetable from "./Vegetable"

const Vegetables=()=>{
    const veg=([
        { Image: "/Vegetables/beet-2029457_1280.png", Name: "Beet Root", Price: "50/kg" },
        { Image: "/Vegetables/bell-peppers-319381_1280.png", Name: "Bell Pepper", Price: "212/kg" },
        { Image: "/Vegetables/broccoli-40295_1280.png", Name: "Broccoli", Price: "102/kg" },
        { Image: "/public/Fruits/tomato-33624_1280.png", Name: "Tomoto", Price: "102/kg" },
        { Image: "/Vegetables/cabbage-575525_1280.png", Name: "Cabbage", Price: "66/kg" },
        { Image: "/Vegetables/calabash-151425_1280.png", Name: "Calabash", Price: "123/kg" },
        { Image: "/Vegetables/carrot-4984620_1280.png", Name: "Carrot", Price: "66/kg" },
        { Image: "/public/Fruits/lemon-154449_1280.png", Name: "Lemon", Price: "66/kg" },
        { Image: "/Vegetables/eggplant-2924511_1920.png", Name: "Egg Plant", Price: "33/kg" },
        { Image: "/Vegetables/garlic-25382_1280.png", Name: "Garlic", Price: "640/kg" },
        { Image: "/Vegetables/peppers-25384_1280.png", Name: "pepper", Price: "390/kg" },
        { Image: "/Vegetables/potato-576598_1280.png", Name: "Potato", Price: "38/kg" },
        { Image: "/Vegetables/radish-576640_1280.png", Name: "Radish", Price: "66/kg" }
    ])
    return(
        <>
            <div className="row">
                {veg.map((item) => {
                    return (
                        <Vegetable key={item.Name} {...item} />
                    )
                })}
            </div>
        </>
    )
}

export default Vegetables
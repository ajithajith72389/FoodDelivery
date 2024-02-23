import React from "react"
import AllProduct from "./AllProduct"
const AllProducts = () => {

    const mainproduct = [
        { Image: "/Vegetables/carrot-4984620_1280.png", Name: "Carrot", Price: "66/kg" },
        { Image: "/Vegetables/cabbage-575525_1280.png", Name: "Cabbage", Price: "66/kg" },
        { Image: "/Fruits/apples-575317_1280.png", Name: "Apple", Price: "90/kg" },
        { Image: "/Vegetables/potato-576598_1280.png", Name: "Potato", Price: "38/kg" },
        { Image: "/Fruits/coconut-150154_1280.png", Name: "Coconut", Price: "70/one-piece" },
        { Image: "/Fruits/tomato-33624_1280.png", Name: "Tomoto", Price: "120/kg" },
        { Image: "/Vegetables/calabash-151425_1280.png", Name: "Calabash", Price: "123/kg" },
        { Image: "/Fruits/lemon-154449_1280.png", Name: "Lemon", Price: "6/one-piece" },
        { Image: "/Fruits/watermelon-4988432_1280.png", Name: "Watermelon", Price: "100/kg" },
        { Image: "/Vegetables/beet-2029457_1280.png", Name: "Beet Root", Price: "50/kg" },
        { Image: "/Vegetables/peppers-25384_1280.png", Name: "pepper", Price: "390/kg" },
        { Image: "/Vegetables/radish-576640_1280.png", Name: "Radish", Price: "66/kg" },
        { Image: "/Fruits/cucumber-5012187_1280.png", Name: "Cucumber", Price: "50/kg" },
        { Image: "/Vegetables/broccoli-40295_1280.png", Name: "Broccoli", Price: "102/kg" },
        { Image: "/Fruits/grapes-159820_1280.png", Name: "Grapes", Price: "120/kg" },
        { Image: "/Fruits/cherry-105141_1280.png", Name: "Cherry", Price: "110/kg" },
        { Image: "/Fruits/pineapples-576576_1280.png", Name: "Pineapple", Price: "170/kg" },
        { Image: "/Vegetables/eggplant-2924511_1920.png", Name: "Egg Plant", Price: "33/kg" },
        { Image: "/Vegetables/garlic-25382_1280.png", Name: "Garlic", Price: "640/kg" },
        { Image: "/Fruits/mango-4996445_1280.png", Name: "Mango", Price: "80/kg" },
        { Image: "/Vegetables/bell-peppers-319381_1280.png", Name: "Bell Pepper", Price: "212/kg" },
        { Image: "/Fruits/bananas-575773_1280.png", Name: "Banana", Price: "50/kg" },
        { Image: "/Fruits/bunch-of-grapes-161763_1280.png", Name: "Green Grapes", Price: "150/kg" },
        { Image: "/Fruits/strawberry-37781_1280.png", Name: "Strawberry", Price: "350/kg" },
        { Image: "/Fruits/orange-42395_1280.png", Name: "Orange", Price: "100/kg" },
        
    ]

    return (
        <>
            <div className="row">
                {mainproduct.map((item) => {
                    return (
                        <AllProduct key={item.Name} {...item} />
                    )
                })}
            </div>
        </>
    )
}

export default AllProducts
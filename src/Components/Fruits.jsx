import React from "react"
import Fruit from "./Fruit"


const Fruits = () => {

    const fruit = ([
        { Image: "/Fruits/apples-575317_1280.png", Name: "Apple", Price: "90/kg" },
        { Image: "/Fruits/bananas-575773_1280.png", Name: "Banana", Price: "50/kg" },
        { Image: "/Fruits/cherry-105141_1280.png", Name: "Cherry", Price: "110/kg" },
        { Image: "/Fruits/coconut-150154_1280.png", Name: "Coconut", Price: "70/one-piece" },
        { Image: "/Fruits/cucumber-5012187_1280.png", Name: "Cucumber", Price: "50/kg" },
        { Image: "/Fruits/bunch-of-grapes-161763_1280.png", Name: "Green Grapes", Price: "150/kg" },
        { Image: "/Fruits/grapes-159820_1280.png", Name: "Grapes", Price: "120/kg" },
        { Image: "/Fruits/lemon-154449_1280.png", Name: "Lemon", Price: "6/one-piece" },
        { Image: "/Fruits/mango-4996445_1280.png", Name: "Mango", Price: "80/kg" },
        { Image: "/Fruits/orange-42395_1280.png", Name: "Orange", Price: "100/kg" },
        { Image: "/Fruits/pineapples-576576_1280.png", Name: "Pineapple", Price: "170/kg" },
        { Image: "/Fruits/strawberry-37781_1280.png", Name: "Strawberry", Price: "350/kg" },
        { Image: "/Fruits/tomato-33624_1280.png", Name: "Tomoto", Price: "120/kg" },
        { Image: "/Fruits/watermelon-4988432_1280.png", Name: "Watermelon", Price: "100/kg" },
    ])

    return (
        <>
            <div className="row">
                {fruit.map((item) => {
                    return (
                        <Fruit key={item.Name} {...item} />
                    )
                })}
            </div>
        </>
    )
}

export default Fruits
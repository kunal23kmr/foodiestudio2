import React from "react";
import foodItems from "./foodItems";
import FoodCard from "./FoodCard";

function Blog() {
    return <>
        <div className="contanier">
            <div>
                {foodItems.map((item) => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    </>
}
export default Blog;
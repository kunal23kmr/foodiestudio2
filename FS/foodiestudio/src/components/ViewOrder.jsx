import React, { useState, useEffect } from "react";
import axios from 'axios';
import foodItems from './foodItems';
import FoodCard from './FoodCard';

export default function ViewOrder() {
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/viewOrder`)
            .then(response => {
                setCartList(response.data);
            })
            .catch(error => {
                console.log('Show order list m error:', error);
            });
    }, []);

    return (
        <div className='container'>
            <h1>Your Orders</h1>
            <br />
            {cartList && cartList.length > 0 ? (
                cartList.map((cartItem) => {
                    const item = foodItems.find((foodItem) => foodItem.id === cartItem.id);

                    // Check if 'item' is defined before accessing its properties
                    if (item) {
                        return (
                            <div>
                                <FoodCard key={item.id} item={item} status='Not Delivered' />
                            </div>
                        );
                    }

                    return null; // Return null for any undefined items
                })
            ) : (
                <div>
                    <h1>Your Order List is empty.</h1>
                </div>
            )}
        </div>
    );
}

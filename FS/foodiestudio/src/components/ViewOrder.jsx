import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import foodItems from './foodItems';


export default function ViewOrder() {

    const [cartList, setCartList] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5000/viewOrder`)
            .then(response => {
                setCartList(response.data);
            })
            .catch(error => {
                console.log('Show order list m   error:', error);
            });

    }, []);


    const handleClick = () => {
        navigate(`/checkOut`);
    }

    return (
        <div className='contanier'>
            <h1>Your Orders.</h1>
            <br />
            <hr />
            {cartList && cartList.length > 0 ? (
                cartList.map((cartItem, index) => {
                    const item = foodItems.find((foodItem) => foodItem.id === cartItem.id);
                    if (item) {
                        return (
                            <div key={item.id + index}>
                                <h2>{item.title}</h2>
                                <img id="image_show" src={process.env.PUBLIC_URL + item.image} alt={item.title} />
                                <p>Restaurant: {item.restaurant}</p>
                                <p>Price: {item.price}</p>
                                <p>Status : Not delivered.</p>
                                <br />
                                <hr />
                            </div>
                        );
                    }
                })
            ) : (
                <div>
                    <h1>Your Cart is empty.</h1>
                </div>
            )}
        </div>
    );
}

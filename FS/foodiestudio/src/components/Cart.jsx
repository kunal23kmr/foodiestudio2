import React, { useEffect, useState } from 'react'
import foodItems from './foodItems';
import { useNavigate } from 'react-router';
import axios from 'axios';


export default function Cart() {
    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        // Fetch user and cart data
        axios.get(`http://localhost:5000/getuser`)
            .then(res => {
                axios.get(`http://localhost:5000/getcartList`)
                    .then(response => {
                        setCartList(response.data);
                    })
                    .catch(error => {
                        console.log('show cart m error:', error);
                    });
            })
            .catch(err => {
                console.log('Error aaya hai pro:', err);
            });
    }, []); // Pass an empty dependency array to run this effect only on component mount

    const handleClick = () => {
        if (cartList.length>0) {
            navigate(`/checkOut`);
        }else{
            alert('Please add something to cart before checkout.!');
        }
    }

    return (
        <div>
            {cartList && cartList.length > 0 ? (
                cartList.map((cartItem) => {
                    const item = foodItems.find((foodItem) => foodItem.id === cartItem.id);
                    if (item) {
                        return (
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                                <img id="image_show" src={process.env.PUBLIC_URL + item.image} alt={item.title} />
                                <p>Restaurant: {item.restaurant}</p>
                                <p>Price: {item.price}</p>
                            </div>
                        );
                    }
                })
            ) : (
                <div>
                    <h1>Your Cart is empty.</h1>
                </div>
            )}
            <button onClick={() => handleClick()}>Order</button>
        </div>
    );
}

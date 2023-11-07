import React, { useEffect, useState } from 'react'
import foodItems from './foodItems';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../css/Cart.css';
import FoodCard from './FoodCard';


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
    }, []);

    const handleClick = () => {
        if (cartList.length>0) {
            navigate(`/checkOut`);
        }else{
            alert('Please add something to cart before checkout.!');
        }
    }

    return (
        <div className='contanier'>
            {cartList && cartList.length > 0 ? (
                cartList.map((cartItem) => {
                    const item = foodItems.find((foodItem) => foodItem.id === cartItem.id);

                    // Check if 'item' is defined before accessing its properties
                    if (item) {
                        return (
                            <div>
                                <FoodCard key={item.id} item={item} status='' />
                            </div>
                        );
                    }

                    return null; // Return null for any undefined items
                })
            ) : (
                <div>
                    <h1>Your Cart is empty.</h1>
                </div>
            )}
            <button className='btn cart' onClick={() => handleClick()}>Order</button>
        </div>
    );
}

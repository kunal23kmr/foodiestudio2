import React, { useEffect, useState } from 'react';
import axios from 'axios';
import foodItems from './foodItems';

export default function CheckOut() {
    const [total, setTotal] = useState(0);
    const [itemList, setItemList] = useState([]);

    const handleClick = () => {
        console.log('clicked.')
        axios.post(`http://localhost:5000/checkOut`)
            .then(res => {
                alert('Order Sucessfully.!');
                setItemList([]);
                setTotal(0);
            }).catch(err => {
                console.log('error aaya post krne me:', err);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/getcartList`)
            .then((res) => {
                console.log('data hai:', res.data);
                const ids = res.data.map((item) => item.id);
                setItemList(ids);
            })
            .catch((err) => {
                console.log('Error aaya hai checkout me:', err);
            });
    }, []);

    useEffect(() => {
        let tt = 0;
        for (const id of itemList) {
            const item = foodItems.find((foodItem) => foodItem.id === id);
            if (item) {
                tt += parseInt(item.price);
            }
        }
        setTotal(tt);
    }, [itemList]);


    return (
        <div>
            <h1>Payment Page</h1>
            <p>{`Total Payable: ${total}`}</p>
            <button onClick={handleClick}>Place order</button>
        </div>
    );
}

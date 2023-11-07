// import React from 'react'
// import { useState, useEffect } from "react";
// import axios from 'axios';
// import foodItems from './foodItems';
// import FoodCard from './FoodCard';


// export default function ViewOrder() {

//     const [cartList, setCartList] = useState();
//     useEffect(() => {
//         axios.get(`http://localhost:5000/viewOrder`)
//             .then(response => {
//                 setCartList(response.data);
//             })
//             .catch(error => {
//                 console.log('Show order list m   error:', error);
//             });

//     }, []);


//     return (
//         <div className='contanier'>
//             <h1>Your Orders.</h1>
//             <br />
//             {/* <hr /> */}
//             {cartList && cartList.length > 0 ? (
//                 cartList.map((cartItem) => {
//                     const item = foodItems.find((foodItem) => foodItem.id === cartItem);

//                     return (<FoodCard key={item.id} item={item} />);
//                 }
//                     // cartList.map((cartItem, index) => {
//                     //     const item = foodItems.find((foodItem) => foodItem.id === cartItem.id);
//                     //     if (item) {
//                     //         return (
//                     //             <div key={item.id + index}>
//                     //                 <h2>{item.title}</h2>
//                     //                 <img id="image_show" src={process.env.PUBLIC_URL + item.image} alt={item.title} />
//                     //                 <p>Restaurant: {item.restaurant}</p>
//                     //                 <p>Price: {item.price}</p>
//                     //                 <p>Status : Not delivered.</p>
//                     //                 <br />
//                     //                 <hr />
//                     //             </div>
//                     //         );
//                     //     }
//                     // }
//                 )
//             ) : (
//                 <div>
//                     <h1>Your Cart is empty.</h1>
//                 </div>
//             )}
//         </div>
//     );
// }


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

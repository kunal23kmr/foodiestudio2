import React from 'react';
import '../css/FoodCard.css';
import { useNavigate } from 'react-router';

const FoodCard = ({ item, status }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/viewBlog/${item.id}`)
    }
    return (
        <>{
            <div key={item.id} className="food-card2" onClick={handleClick}>
                <div className="food-image2">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="food-details2">
                    <h3>{item.title}</h3>
                    <p className='food_des'>{item.description}</p>
                    <p className='food_res' ><b>Restaurant:</b> {item.restaurant}</p>
                    {status && <div>Status: {status}</div>}
                </div>
                <div className="food-price2">
                    <p className='food_p'>Price:$<span className='dollar'>{item.price}</span></p>
                </div>
            </div>
        }
        </>
    );
};

export default FoodCard;

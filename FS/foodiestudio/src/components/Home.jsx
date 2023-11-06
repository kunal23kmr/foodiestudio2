import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Home.css';
// import axios from 'axios';
import foodItems from "./foodItems";

function Home() {

  const navigate = useNavigate();
  const showDetails = (productId) => {
    navigate(`/singleBlog/${productId}`);
  };


  return (
    <div className="contanior">
      <div className="home">
        <br />
        <br />
        <br />
        <br />
        <h1 className="heading-1">Welcome to FoodieStudio</h1><br /><br />
        <div className="box">
          <div className="heading-2">
            Browse your Favorite food from your Favorite Restaurants
          </div><br />
          <div className="food-cards">
            {foodItems.map((item) => (
              <div key={item.id} className="food-card">
                <img className='image_card' src={process.env.PUBLIC_URL + item.image} alt={item.title} />
                <h3 className="item-name">{item.title}</h3>
                <p className="resturant-name">By: {item.restaurant}</p>
                <button onClick={() => showDetails(item.id)}>View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
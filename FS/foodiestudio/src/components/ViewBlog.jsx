// import React from 'react';
// import { useParams } from 'react-router-dom';
// import foodItems from './foodItems';
// import '../css/ViewBlog.css';

// export default function ViewBlog() {
//     const { id } = useParams();
//     const selectedFoodItem = foodItems.find((item) => item.id === parseInt(id, 10));

//     if (!selectedFoodItem) {
//         return <div>Food item not found.</div>;
//     }

//     const {
//         title,
//         image,
//         description,
//         restaurant,
//         price,
//         recipe: { ingredients, instructions },
//     } = selectedFoodItem;

//     return (
//         <div className="food-item-details">
//             <div className='box-1'>
//                 <div className='blog_image'>
//                     <img src={image} alt={title} />
//                 </div>
//                 <hr />
//                 <div className='blog_right'>
//                     <p className='blog_title'>{title}</p>
//                     <hr />
//                     <p className='blog_des'><b className='th'>Description:</b> <div>{description}</div></p>
//                     <p className='blog_res'><b>Restaurant:</b> <div>{restaurant}</div></p>
//                     <p className='blog_p food_p'>Price:$<span className='dollar'>{price}</span></p>
//                 </div>
//             </div>
//             <hr />

//             <div>
//                 <div className="recipe">
//                     <h2>Recipe</h2>
//                     <div className="recipe-section">
//                         <h3>Ingredients:</h3>
//                         <ul>
//                             {ingredients.map((ingredient, index) => (
//                                 <li key={index}>{ingredient}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="recipe-section">
//                         <h3>Instructions:</h3>
//                         <p className="instructions">{instructions}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from 'react';
import { useParams } from 'react-router-dom';
import foodItems from './foodItems';
import '../css/ViewBlog.css';

export default function ViewBlog() {
    const { id } = useParams();
    const selectedFoodItem = foodItems.find((item) => item.id === parseInt(id, 10));

    if (!selectedFoodItem) {
        return <div>Food item not found.</div>;
    }

    const {
        title,
        image,
        description,
        restaurant,
        price,
        recipe: { ingredients, instructions },
    } = selectedFoodItem;

    // Convert instructions into an array of strings
    const instructionsArray = instructions.split('\n').filter((line) => line.trim() !== '');

    return (
        <div className="food-item-details">
            <div className='box-1'>
                <div className='blog_image'>
                    <img src={image} alt={title} />
                </div>
                <hr />
                <div className='blog_right'>
                    <p className='blog_title'>{title}</p>
                    <hr />
                    <p className='blog_des'><b className='th'>Description:</b> <div>{description}</div></p>
                    <p className='blog_res'><b>Restaurant:</b> <div>{restaurant}</div></p>
                    <p className='blog_p food_p'>Price:$<span className='dollar'>{price}</span></p>
                </div>
            </div>
            <hr />

            <div>
                <div className="recipe">
                    <h2>Recipe</h2>
                    <div className="recipe-section">
                        <h3>Ingredients:</h3>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="recipe-section">
                        <h3>Instructions:</h3>
                        <ul>
                            {instructionsArray.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

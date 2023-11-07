import image1 from '../images/food_images/food1.jpg';
import image2 from '../images/food_images/food2.jpg';
import image3 from '../images/food_images/food3.webp';
import image4 from '../images/food_images/food4.jpg';
import image5 from '../images/food_images/food5.jpg';
import image6 from '../images/food_images/food6.jpg';
import image7 from '../images/food_images/food7.jpg';
import image8 from '../images/food_images/food8.jpg';
import image9 from '../images/food_images/food9.jpg';
import image10 from '../images/food_images/food10.webp';

const foodItems = [
    {
        id: 1,
        title: 'Rasgulla',
        description: 'Description of Food Item 1.',
        restaurant: 'Kunal da Dhaba',
        image: image1,
        price: '10',
        recipe: {
            ingredients: [
                "1 liter full-fat milk",
                "2 tablespoons lemon juice or white vinegar",
                "3-4 cups ice cubes",
                "2 cups sugar",
                "4 cups water",
                "A pinch of cardamom powder (optional)",
                "A few saffron strands (optional)",
                "1 teaspoon rose water (optional)",
            ],
            instructions: "Here are the steps to make Rasgulla:\n\n" +
                "1. Start by making chhena (cottage cheese):\n" +
                "   - Heat the milk in a heavy-bottomed pan, and bring it to a gentle boil.\n" +
                "   - Gradually add lemon juice or white vinegar to curdle the milk.\n" +
                "   - Once the milk solids (chhena) separate from the whey and the whey becomes clear, turn off the heat.\n" +
                "   - Place a muslin cloth or cheesecloth over a strainer and strain the chhena. Rinse it under cold water to remove any lemony taste.\n" +
                "   - Tie the cloth into a bundle, hang it over a tap, and let the excess water drip for about 30 minutes.\n" +
                "   - After 30 minutes, remove the chhena from the cloth. It should be crumbly and moist.\n" +
                "   - Knead the chhena well for about 10-15 minutes until it becomes smooth and soft.\n" +
                "2. Divide the chhena into equal-sized small balls and shape them into smooth, crack-free balls. Keep them covered.\n" +
                "3. In a large vessel, add sugar and water. Bring it to a boil, stirring occasionally to dissolve the sugar.\n" +
                "4. Once the sugar syrup starts boiling, gently drop the chhena balls into the syrup one by one.\n" +
                "5. Cover the vessel and let it simmer for about 20-25 minutes. The Rasgulla balls will puff up and increase in size.\n" +
                "6. Add a pinch of cardamom powder, saffron strands, and rose water to the syrup. Simmer for an additional 2-3 minutes.\n" +
                "7. Turn off the heat and allow the Rasgullas to cool down in the syrup.\n" +
                "8. Once they have cooled to room temperature, refrigerate the Rasgullas for a few hours before serving.\n\n" +
                "Serve chilled Rasgullas as a delightful dessert. Enjoy your homemade Rasgulla!\n" +
                "Rasgullas can be enjoyed on their own or used to make other desserts like Rasgulla Rabri or Rasgulla Ice Cream."
        },

    },
    {
        id: 2,
        title: 'Cholle Bhature',
        description: 'Description of Food Item 2.',
        restaurant: 'Swadeshi Bhog',
        image: image2,
        price: '20',
        recipe: {
            ingredients: [],
            instructions: '',
        },
    },
    {
        id: 3,
        title: 'Dhokla',
        description: 'Description of Food Item 3.',
        restaurant: 'Swadeshi Bhog',
        image: image6,
        price: '20',
        recipe: {
            ingredients: [
                "For Chole (Chickpea Curry):",
                "- 2 cups chickpeas (chole), soaked overnight",
                "- 2 large onions, finely chopped",
                "- 2 large tomatoes, finely chopped",
                "- 2-3 green chilies, slit",
                "- 1-inch piece of ginger, grated",
                "- 4-5 cloves of garlic, minced",
                "- 2 teaspoons cumin seeds",
                "- 1 teaspoon turmeric powder",
                "- 2 teaspoons red chili powder",
                "- 2 teaspoons ground coriander",
                "- 2 teaspoons ground cumin",
                "- 1 teaspoon garam masala",
                "- 1/2 teaspoon asafoetida (hing)",
                "- 1/4 cup cooking oil",
                "- Salt to taste",
                "- Fresh coriander leaves for garnish",
                "- Lemon wedges for garnish",
                "For Bhature (Fried Bread):",
                "- 2 cups all-purpose flour (maida)",
                "- 1/2 cup plain yogurt",
                "- 1 teaspoon sugar",
                "- 1/2 teaspoon baking powder",
                "- A pinch of baking soda",
                "- Salt to taste",
                "- Water (as needed)",
                "- Cooking oil (for deep frying)",
            ],
            instructions: "Here are the steps to make Chole Bhature:\n\n" +
                "For Chole (Chickpea Curry):\n" +
                "1. Heat oil in a large pan or pressure cooker. Add cumin seeds and asafoetida.\n" +
                "2. Add finely chopped onions and sauté until they turn golden brown.\n" +
                "3. Add minced garlic, grated ginger, and green chilies. Sauté for a few minutes.\n" +
                "4. Add finely chopped tomatoes and cook until they become soft and the oil separates.\n" +
                "5. Add all the dry spices - turmeric powder, red chili powder, ground coriander, ground cumin, garam masala, and salt. Cook for a few minutes.\n" +
                "6. Add soaked chickpeas (chole) and mix well.\n" +
                "7. Add water, cover the pan, and cook until the chickpeas are tender. If using a pressure cooker, cook for 4-5 whistles.\n" +
                "8. Adjust the consistency of the curry by adding water if needed.\n" +
                "9. Garnish with fresh coriander leaves and a squeeze of lemon juice.\n" +
                "For Bhature (Fried Bread):\n" +
                "1. In a mixing bowl, combine all-purpose flour, sugar, baking powder, baking soda, and salt.\n" +
                "2. Add plain yogurt and mix well.\n" +
                "3. Knead the dough, adding water as needed, until it's soft and smooth. Cover and let it rest for 2 hours.\n" +
                "4. Divide the dough into small portions and roll them into balls.\n" +
                "5. Heat oil in a deep frying pan. Roll out each dough ball into a round disc and deep fry in hot oil until it puffs up and turns golden brown.\n" +
                "6. Serve the hot and puffy bhature with the chole (chickpea curry).\n\n" +
                "Enjoy your delicious Chole Bhature, a classic North Indian dish!"
        },
    },
    {
        id: 4,
        title: 'Manchurian',
        description: 'Description of Food Item 4.',
        restaurant: 'Fast Foodies',
        image: image3,
        price: '20',
        recipe: {
            ingredients: [
                "For Manchurian Balls:",
                "- 2 cups finely grated cabbage",
                "- 1/2 cup finely chopped carrots",
                "- 1/4 cup finely chopped bell peppers (capsicum)",
                "- 1/4 cup finely chopped green beans",
                "- 1/4 cup finely chopped spring onions",
                "- 2-3 green chilies, finely chopped",
                "- 1 teaspoon ginger-garlic paste",
                "- 1/2 cup all-purpose flour (maida)",
                "- 1/4 cup cornflour",
                "- 2 tablespoons soy sauce",
                "- 1 teaspoon red chili sauce",
                "- 1/2 teaspoon black pepper powder",
                "- Salt to taste",
                "- Oil for deep frying",
                "For Manchurian Sauce:",
                "- 2 tablespoons cooking oil",
                "- 1 teaspoon garlic, minced",
                "- 1 teaspoon ginger, minced",
                "- 2-3 green chilies, chopped",
                "- 1/4 cup spring onions, chopped",
                "- 2 tablespoons soy sauce",
                "- 1 tablespoon red chili sauce",
                "- 1 tablespoon tomato ketchup",
                "- 1 tablespoon vinegar",
                "- 1 teaspoon sugar",
                "- 1 teaspoon cornflour mixed with 2 tablespoons water",
                "- Salt to taste",
                "- Fresh coriander leaves for garnish",
            ],
            instructions: "Here are the steps to make Manchurian:\n\n" +
                "For Manchurian Balls:\n" +
                "1. In a large mixing bowl, combine finely grated cabbage, chopped carrots, bell peppers, green beans, spring onions, green chilies, and ginger-garlic paste.\n" +
                "2. Add all-purpose flour (maida), cornflour, soy sauce, red chili sauce, black pepper powder, and salt to the vegetable mixture. Mix well to form a dough-like consistency.\n" +
                "3. Roll the mixture into small balls or desired shapes.\n" +
                "4. Heat oil in a deep frying pan. Deep fry the Manchurian balls until they turn golden brown and crispy. Remove and drain excess oil on a paper towel.\n" +
                "For Manchurian Sauce:\n" +
                "1. In a separate pan, heat cooking oil. Add minced garlic, ginger, and chopped green chilies. Sauté for a minute.\n" +
                "2. Add chopped spring onions and cook for another minute.\n" +
                "3. Stir in soy sauce, red chili sauce, tomato ketchup, vinegar, sugar, and salt. Mix well.\n" +
                "4. Add the cornflour-water mixture to thicken the sauce. Stir until the sauce thickens.\n" +
                "5. Add the fried Manchurian balls to the sauce and toss them until they are well coated.\n" +
                "6. Garnish with fresh coriander leaves.\n\n" +
                "Serve hot Manchurian as an appetizer or with steamed rice or noodles.\n\n" +
                "Enjoy your delicious Manchurian!"
        },
    },
    {
        id: 5,
        title: 'Paneer Butter Masala',
        description: 'Description of Food Item 5.',
        restaurant: 'Kunal da Dhaba',
        image: image4,
        price: '20',
        recipe: {
            ingredients: [
                "For Paneer Marinade:",
                "- 250g paneer (cottage cheese), cubed",
                "- 1/4 cup thick yogurt",
                "- 1 teaspoon ginger-garlic paste",
                "- 1/2 teaspoon red chili powder",
                "- Salt to taste",
                "For Gravy:",
                "- 2 tablespoons butter",
                "- 1 tablespoon oil",
                "- 1 teaspoon cumin seeds",
                "- 1 large onion, finely chopped",
                "- 1 green chili, slit",
                "- 1 teaspoon ginger-garlic paste",
                "- 2 large tomatoes, pureed",
                "- 1/2 teaspoon red chili powder",
                "- 1/2 teaspoon turmeric powder",
                "- 1 teaspoon garam masala",
                "- 1 teaspoon kasuri methi (dried fenugreek leaves)",
                "- 1/4 cup fresh cream",
                "- Salt to taste",
                "- Fresh coriander leaves for garnish",
            ],
            instructions: "Here are the steps to make Paneer Butter Masala:\n\n" +
                "For Paneer Marinade:\n" +
                "1. In a bowl, mix yogurt, ginger-garlic paste, red chili powder, and a pinch of salt.\n" +
                "2. Add paneer cubes to the marinade and let them sit for 15-20 minutes.\n" +
                "For Gravy:\n" +
                "1. Heat butter and oil in a pan. Add cumin seeds and let them splutter.\n" +
                "2. Add finely chopped onions and sauté until they turn golden brown.\n" +
                "3. Add the green chili, ginger-garlic paste, and sauté for a few minutes.\n" +
                "4. Stir in the tomato puree and cook until the oil separates from the gravy.\n" +
                "5. Add red chili powder, turmeric powder, garam masala, and kasuri methi. Mix well.\n" +
                "6. Pour in fresh cream and salt. Stir until the gravy thickens.\n" +
                "7. Add the marinated paneer cubes and simmer for a few minutes until the paneer is heated through.\n" +
                "8. Garnish with fresh coriander leaves.\n\n" +
                "Serve Paneer Butter Masala hot with naan, roti, or rice.\n\n" +
                "Enjoy your delicious Paneer Butter Masala!"
        },
    },
    {
        id: 6,
        title: 'Butter Naan',
        description: 'Description of Food Item 6.',
        restaurant: 'Swadeshi Bhog',
        image: image5,
        price: '20',
        recipe: {
            ingredients: [
                "For Naan Dough:",
                "- 2 cups all-purpose flour",
                "- 1/2 teaspoon baking powder",
                "- 1/4 teaspoon baking soda",
                "- 1/4 cup yogurt",
                "- 1/4 cup milk",
                "- 2 tablespoons ghee or melted butter",
                "- 1/2 teaspoon sugar",
                "- 1/2 teaspoon salt",
                "- Water as needed",
                "For Garlic Butter Topping:",
                "- 2-3 cloves garlic, minced",
                "- 2 tablespoons melted butter",
                "- Fresh coriander leaves (optional)",
            ],
            instructions: "Here are the steps to make Butter Naan:\n\n" +
                "For Naan Dough:\n" +
                "1. In a mixing bowl, combine all-purpose flour, baking powder, baking soda, sugar, and salt.\n" +
                "2. Add yogurt, milk, and ghee (or melted butter) to the dry ingredients.\n" +
                "3. Mix the ingredients and knead into a soft and smooth dough. If the dough is too dry, add water as needed.\n" +
                "4. Cover the dough and let it rest for 2-3 hours.\n" +
                "For Garlic Butter Topping:\n" +
                "1. In a small bowl, mix minced garlic with melted butter.\n" +
                "To Make Naan:\n" +
                "1. Preheat a tandoor or a grill to high heat. If you don't have a tandoor, you can use a cast-iron skillet.\n" +
                "2. Divide the rested dough into small, equal-sized portions.\n" +
                "3. Roll each portion into an oval or round shape, ensuring it's not too thick.\n" +
                "4. Brush the rolled naan with water on one side.\n" +
                "5. Place the wet side down on the hot tandoor or skillet. Cook until bubbles form.\n" +
                "6. Flip the naan and cook the other side until it's golden brown and slightly charred.\n" +
                "7. Remove the naan from the heat.\n" +
                "8. While the naan is still hot, brush it with the garlic butter topping.\n" +
                "9. Garnish with fresh coriander leaves if desired.\n\n" +
                "Serve Butter Naan hot with your favorite curry or enjoy it with chutney or raita.\n\n" +
                "Enjoy your delicious Butter Naan!"
        },
    },
    {
        id: 7,
        title: 'Spring Roll',
        description: 'Description of Food Item 7.',
        restaurant: 'Fast Foodies',
        image: image8,
        price: '20',
        recipe: {
            ingredients: [
                "For the Filling:",
                "- 1 cup shredded cabbage",
                "- 1/2 cup shredded carrots",
                "- 1/2 cup thinly sliced bell peppers (red, green, or yellow)",
                "- 1/2 cup thinly sliced onions",
                "- 2 cloves garlic, minced",
                "- 1/2 cup cooked and shredded chicken or tofu (optional)",
                "- 2 tablespoons vegetable oil",
                "- 1 teaspoon soy sauce",
                "- Salt and pepper to taste",
                "For the Spring Roll Wrappers:",
                "- 10 spring roll wrappers (rice paper)",
                "- Warm water for soaking",
                "For Frying:",
                "- Vegetable oil for deep frying",
                "For the Dipping Sauce:",
                "- 1/4 cup soy sauce",
                "- 1 tablespoon rice vinegar",
                "- 1 teaspoon sugar",
                "- 1/2 teaspoon sesame oil",
                "- Red chili flakes or sriracha sauce for heat (optional)",
            ],
            instructions: "Here are the steps to make Spring Rolls:\n\n" +
                "For the Filling:\n" +
                "1. Heat vegetable oil in a pan over medium heat. Add minced garlic and sauté until fragrant.\n" +
                "2. Add sliced onions and cook until they become translucent.\n" +
                "3. Add shredded cabbage, carrots, and bell peppers to the pan. Stir-fry for a few minutes until the vegetables soften.\n" +
                "4. If using chicken or tofu, add it to the pan and stir-fry until cooked.\n" +
                "5. Season the filling with soy sauce, salt, and pepper. Stir well and remove from heat.\n" +
                "For the Spring Roll Wrappers:\n" +
                "1. Prepare a shallow dish with warm water for soaking the spring roll wrappers.\n" +
                "2. Place a spring roll wrapper in the water for a few seconds until it becomes pliable.\n" +
                "3. Lay the soaked wrapper flat on a clean surface.\n" +
                "To Make Spring Rolls:\n" +
                "1. Place a portion of the prepared filling in the center of the wrapper.\n" +
                "2. Fold the sides of the wrapper over the filling, and then roll it up tightly, sealing the edges with a bit of water.\n" +
                "3. Repeat with the remaining wrappers and filling.\n" +
                "For Frying:\n" +
                "1. Heat vegetable oil in a deep frying pan or pot to 350°F (180°C).\n" +
                "2. Carefully place the spring rolls in the hot oil and fry until they become golden brown and crispy.\n" +
                "3. Remove the spring rolls and place them on paper towels to drain excess oil.\n" +
                "For the Dipping Sauce:\n" +
                "1. In a small bowl, mix soy sauce, rice vinegar, sugar, sesame oil, and red chili flakes or sriracha sauce (if desired).\n" +
                "2. Serve the crispy spring rolls with the dipping sauce.\n\n" +
                "Enjoy your delicious Spring Rolls as a tasty snack or appetizer!"
        },
    },
    {
        id: 8,
        title: 'MOMOS',
        description: 'Description of Food Item 8.',
        restaurant: 'It is Chinesse Time',
        image: image9,
        price: '20',
        recipe: {
            ingredients: [
                "For the Dough:",
                "- 1 cup all-purpose flour",
                "- A pinch of salt",
                "- Water, as needed",
                "For the Filling:",
                "- 1 cup ground chicken or vegetables",
                "- 1 small onion, finely chopped",
                "- 2 cloves garlic, minced",
                "- 1-inch piece of ginger, minced",
                "- 2-3 green chilies, finely chopped (adjust to taste)",
                "- 1/2 cup cabbage, finely chopped",
                "- 1/2 cup carrot, finely chopped",
                "- 2-3 sprigs of cilantro, finely chopped",
                "- 1/2 teaspoon soy sauce",
                "- 1/2 teaspoon sesame oil",
                "- Salt and pepper to taste",
                "For the Dipping Sauce:",
                "- 2 tablespoons soy sauce",
                "- 1 tablespoon rice vinegar",
                "- 1/2 teaspoon sesame oil",
                "- 1/2 teaspoon sugar",
                "- A pinch of red chili flakes (optional)",
            ],
            instructions: "Here are the steps to make Momos:\n\n" +
                "For the Dough:\n" +
                "1. In a bowl, combine all-purpose flour and a pinch of salt.\n" +
                "2. Gradually add water and knead the dough until it becomes smooth and elastic. Cover it and let it rest for 30 minutes.\n" +
                "For the Filling:\n" +
                "1. In a mixing bowl, combine the ground chicken or vegetables, finely chopped onion, minced garlic, minced ginger, chopped green chilies, finely chopped cabbage, finely chopped carrot, and chopped cilantro.\n" +
                "2. Add soy sauce, sesame oil, salt, and pepper to taste. Mix the filling until well combined.\n" +
                "To Assemble Momos:\n" +
                "1. Divide the dough into small portions and roll them into thin circles, about 4 inches in diameter.\n" +
                "2. Place a spoonful of the filling in the center of each circle.\n" +
                "3. Carefully fold the circle in half, forming a half-moon shape. Pinch and fold the edges to seal the momo, creating pleats as you go for an attractive look.\n" +
                "For Steaming:\n" +
                "1. Arrange the momos in a greased steaming basket, ensuring they don't touch each other.\n" +
                "2. Steam the momos for about 15-20 minutes until the dough becomes translucent and the filling is cooked.\n" +
                "For the Dipping Sauce:\n" +
                "1. In a small bowl, combine soy sauce, rice vinegar, sesame oil, sugar, and a pinch of red chili flakes (if you like it spicy).\n" +
                "2. Stir until the sauce is well mixed.\n\n" +
                "Your delicious Momos are ready to be enjoyed with the dipping sauce!"
        },
    },
    {
        id: 9,
        title: 'Amritsari Kulcha',
        description: 'Description of Food Item 9.',
        restaurant: 'Swadeshi Bhog',
        image: image7,
        price: '20',
        recipe: {
            ingredients: [
                "For the Dough:",
                "- 2 cups all-purpose flour",
                "- 1/2 cup yogurt",
                "- 2 tablespoons oil",
                "- 1/2 teaspoon baking powder",
                "- 1/2 teaspoon sugar",
                "- Salt to taste",
                "- Water, as needed",
                "For the Filling:",
                "- 4-5 boiled and mashed potatoes",
                "- 1 onion, finely chopped",
                "- 2 green chilies, finely chopped",
                "- 1/2 teaspoon red chili powder",
                "- 1/2 teaspoon garam masala",
                "- 1/2 teaspoon cumin seeds",
                "- Salt to taste",
                "- Fresh coriander leaves, finely chopped",
                "For Rolling and Cooking:",
                "- Butter or ghee",
            ],
            instructions: "Here are the steps to make Amritsari Kulcha:\n\n" +
                "For the Dough:\n" +
                "1. In a mixing bowl, combine all-purpose flour, yogurt, oil, baking powder, sugar, and salt.\n" +
                "2. Gradually add water and knead the dough until it's soft and pliable. Cover it with a damp cloth and let it rest for a few hours or overnight.\n" +
                "For the Filling:\n" +
                "1. In another bowl, mix boiled and mashed potatoes, finely chopped onion, chopped green chilies, red chili powder, garam masala, cumin seeds, and salt. Add fresh coriander leaves and mix well.\n" +
                "To Make Kulchas:\n" +
                "1. Divide the dough into equal portions and roll them into balls.\n" +
                "2. Take a dough ball and flatten it. Place a portion of the potato filling in the center.\n" +
                "3. Seal the edges and form it back into a ball.\n" +
                "4. Roll the stuffed ball into a thick circle, ensuring the filling doesn't come out.\n" +
                "Cooking Kulchas:\n" +
                "1. Heat a tawa or griddle over medium-high heat. Place the rolled kulcha on it.\n" +
                "2. Cook one side until you see bubbles, then flip it over.\n" +
                "3. Apply ghee or butter and cook until both sides are golden brown and crispy.\n" +
                "4. Remove from the tawa and serve hot.\n\n" +
                "Enjoy your homemade Amritsari Kulchas with your favorite chutney or side dish!"

        },
    },
    {
        id: 10,
        title: 'Dosa',
        description: 'Description of Food Item 10.',
        restaurant: 'Southie Eats',
        image: image10,
        price: '20',
        recipe: {
            ingredients: [
                "For Dosa Batter:",
                "- 1 cup parboiled rice",
                "- 1/2 cup urad dal (black gram)",
                "- 1/4 cup flattened rice (poha)",
                "- 1/2 teaspoon fenugreek seeds",
                "- Salt to taste",
                "For Making Dosa:",
                "- Dosa batter",
                "- Oil or ghee, for cooking",
            ],
            instructions: "Here are the steps to make Dosa:\n\n" +
                "For Preparing Dosa Batter:\n" +
                "1. Rinse the rice and urad dal separately, and soak them in water for at least 4-6 hours or overnight.\n" +
                "2. In a separate bowl, soak flattened rice and fenugreek seeds for the same duration.\n" +
                "3. Drain excess water from all ingredients and grind them separately to a smooth paste using a little water as needed.\n" +
                "4. Mix the rice and urad dal paste together. Add salt to taste and mix well.\n" +
                "5. Cover the batter and allow it to ferment in a warm place for 8-10 hours or overnight. The batter should double in volume.\n" +
                "For Making Dosas:\n" +
                "1. Heat a non-stick or cast-iron griddle (tava) on medium-high heat. Sprinkle a few drops of water to check if it's hot enough. The water should sizzle and evaporate quickly.\n" +
                "2. Grease the griddle with a few drops of oil or ghee.\n" +
                "3. Pour a ladleful of dosa batter in the center and spread it in a circular motion to make a thin dosa.\n" +
                "4. Drizzle a few drops of oil or ghee on the dosa's surface.\n" +
                "5. Cook until the dosa turns golden and crisp. No need to flip the dosa.\n" +
                "6. Fold the dosa in half and serve hot with coconut chutney, sambar, or your favorite side dish.\n\n" +
                "Enjoy your homemade crispy and delicious Dosas!"
        },
    }
];

export default foodItems;
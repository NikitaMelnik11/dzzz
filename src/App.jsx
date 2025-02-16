// src/App.js
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import RecipeCard from "./components/RecipeCard";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    background-color: #fef4d9;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

const recipes = [
  {
    name: "Smoked Salmon Burger",
    time: "20 min",
    servings: 6,
    calories: 210,
    difficulty: 0,
    image: "https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg",
  },
  {
    name: "Tomatoes With Creamy Feta",
    time: "15 min",
    servings: 3,
    calories: 600,
    difficulty: 0,
    image: "https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2580%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg",
  },
  {
    name: "Spicy Potato Salad",
    time: "30 min",
    servings: 2,
    calories: 320,
    difficulty: 1,
    image: "https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2580%2Cc_limit/0701-tj-recipe-potato-v2.jpg",
  },
  {
    name: "Chicken Biryani",
    time: "40 min",
    servings: 4,
    calories: 700,
    difficulty: 2,
    image: "https://assets.bonappetit.com/photos/5db1b689823b960008d8468d/1:1/w_2580%2Cc_limit/Chicken-Biryani-Lede-NEW.jpg",
  },
];

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </Container>
    </>
  );
};

export default App;

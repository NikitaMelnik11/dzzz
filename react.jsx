import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #fdf4dc;
    margin: 0;
    padding: 0;
  }
`;

const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const RecipeCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 250px;
  text-align: center;
  padding: 15px;
  position: relative;
  ${(props) =>
    props.difficulty === 3 &&
    `border: 3px solid red; box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);`}
`;

const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Difficulty = styled.div`
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  ${(props) =>
    props.level === 3
      ? `background: red; color: white;`
      : props.level === 1
      ? `background: orange; color: white;`
      : `background: green; color: white;`}
`;

const recipes = [
  {
    name: "Smoked salmon burger",
    time: "20 min",
    servings: "6 servings",
    calories: "210 calories",
    image: "image_url",
    difficulty: 0,
  },
  {
    name: "Tomatoes With Creamy Feta",
    time: "15 min",
    servings: "3 servings",
    calories: "600 calories",
    image: "image_url",
    difficulty: 1,
  },
  {
    name: "Spicy potato salad",
    time: "30 min",
    servings: "2 servings",
    calories: "320 calories",
    image: "image_url",
    difficulty: 1,
  },
  {
    name: "Chicken Biryani",
    time: "40 min",
    servings: "4 servings",
    calories: "700 calories",
    image: "image_url",
    difficulty: 3,
  },
];

const RecipeList = () => {
  return (
    <>
      <GlobalStyle />
      <RecipeContainer>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} difficulty={recipe.difficulty}>
            <RecipeImage src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.time} | {recipe.servings} | {recipe.calories}</p>
            <Difficulty level={recipe.difficulty}>
              {recipe.difficulty === 3 ? "Hard" : recipe.difficulty === 1 ? "Medium" : "Easy"}
            </Difficulty>
          </RecipeCard>
        ))}
      </RecipeContainer>
    </>
  );
};

export default RecipeList;

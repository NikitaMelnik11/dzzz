import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Difficulty from "./Difficulty";

const Card = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  width: 280px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  color: #333;
`;

const Info = styled.p`
  font-size: 14px;
  color: #666;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={recipe.image} alt={recipe.name} />
      <Title>{recipe.name}</Title>
      <Info>⏱ {recipe.time} | 🍽 {recipe.servings} servings | 🔥 {recipe.calories} calories</Info>
      <Difficulty level={recipe.difficulty} />
    </Card>
  );
};

export default RecipeCard;

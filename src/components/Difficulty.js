import React from "react";
import styled from "styled-components";

const levels = ["Easy", "Medium", "Hard"];
const colors = ["#4CAF50", "#FFC107", "#F44336"];

const DifficultyTag = styled.span`
  display: inline-block;
  background-color: ${(props) => colors[props.level]};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 10px;
`;

const Difficulty = ({ level }) => {
  return <DifficultyTag level={level}>{levels[level]}</DifficultyTag>;
};

export default Difficulty;

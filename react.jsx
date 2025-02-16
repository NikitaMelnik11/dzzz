import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    background-color: #fef4d9;
    margin: 0;
    padding: 0;
  }
`;

const recipes = [
  {
    name: "ну это бургер детка",
    time: "20 min",
    servings: 6,
    calories: 210,
    difficulty: 0,
    image: "https://assets.bonappetit.com/photos/62cc4eca787a907e535e8e7f/1:1/w_2580%2Cc_limit/0711-black-bean-burger-lede.jpg",
  },
  {
    name: "чиназес ",
    time: "15 min",
    servings: 3,
    calories: 600,
    difficulty: 0,
    image: "https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2580%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg",
  },
  {
    name: "ворк юа ",
    time: "30 min",
    servings: 2,
    calories: 320,
    difficulty: 1,
    image: "https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2580%2Cc_limit/0701-tj-recipe-potato-v2.jpg",
  },
  {
    name: "курица ",
    time: "40 min",
    servings: 4,
    calories: 700,
    difficulty: 3,
    image: "https://assets.bonappetit.com/photos/5db1b689823b960008d8468d/1:1/w_2580%2Cc_limit/Chicken-Biryani-Lede-NEW.jpg",
  },
];

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  width: 260px;
  text-align: center;
  padding-bottom: 10px;
  border: ${(props) => (props.isHard ? "3px solid red" : "none")};
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 15px 0;
  font-weight: 600;
`;

const Info = styled.p`
  font-size: 14px;
  color: #555;
  font-weight: 500;
`;

const DifficultyWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 10px;
`;

const DifficultyTag = styled.span`
  background: ${(props) =>
    props.level === 3 ? "#e63946" : props.level === 1 ? "#f4a261" : "#2a9d8f"};
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  transition: background 0.3s ease;
`;

const Difficulty = ({ level }) => {
  return (
    <DifficultyWrapper>
      <DifficultyTag level={level}>
        {level === 3 ? "Hard" : level === 1 ? "Medium" : "Easy"}
      </DifficultyTag>
    </DifficultyWrapper>
  );
};

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
          <Card
            key={index}
            isHard={recipe.difficulty === 3}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={recipe.image}
              alt={recipe.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <Title>{recipe.name}</Title>
            <Info>⏳ {recipe.time} | 🍽 {recipe.servings} servings | 🔥 {recipe.calories} calories</Info>
            <Difficulty level={recipe.difficulty} />
          </Card>
        ))}
      </Container>
    </>
  );
};

export default App;

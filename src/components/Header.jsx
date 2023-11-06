import React from "react";
import reactImage from "../assets/react-core-concepts.png"
const randomReactDescriptions = ["Fundamental", "Dynamic", "Core", "Basic"];
const getRandomInteger = (max) => Math.floor(Math.random() * (max + 1));
const Header = () => {
  const description =
    randomReactDescriptions[
      getRandomInteger(randomReactDescriptions.length - 1)
    ];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {`
        ${description}
         React concepts you will need for almost any app you are going to build!`}
      </p>
    </header>
  );
};

export default Header;

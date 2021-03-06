import React from "react";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import style from "./Home.module.css";
import CreateQuestion from "../../Containers/CreateQuestion/CreateQuestion";
const Home = () => {
  const categories = [
    "Art",
    "History",
    "Vehicles",
    "Geography",
    "Sports",
    "Music",
  ];

  return (
    <div className={style.homeContainer}>
      <h1 className={style.homeContainer__title}>
        Please select a category to start playing
      </h1>
      <div className={style.cardsContainer}>
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category} />
        ))}
      </div>
      <CreateQuestion />
    </div>
  );
};

export default Home;

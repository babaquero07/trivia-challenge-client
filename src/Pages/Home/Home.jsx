import React from "react";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import style from "./Home.module.css";

const Home = () => {
  const categories = [
    "General Knowledge",
    "History",
    "Vehicles",
    "Video Games",
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
    </div>
  );
};

export default Home;

import React from "react";
import style from "./CategoryCard.module.css";

const CategoryCard = ({ title }) => {
  // Remuevo espacios y convierto a minuscula.
  const params = title.replace(/ /g, "").toLowerCase();
  const URL = `play/${params}`;

  return (
    <div className={style.categoryCardContainer}>
      <h1>{title}</h1>
      <a href={URL}>Click to start</a>
    </div>
  );
};

export default CategoryCard;

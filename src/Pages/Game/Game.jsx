import React from "react";
import { useParams, Link } from "react-router-dom";
import Quiz from "../../Components/Quiz/Quiz";
import style from "./Game.module.css";

const Game = () => {
  const { category } = useParams();
  return (
    <div className={style.gameContainer}>
      <h1 className={style.gameContainer__title}>{category} Quiz</h1>
      <Quiz />
      <Link className={style.gameContainer__backLink} to="/home">
        Back
      </Link>
    </div>
  );
};

export default Game;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Quiz from "../../Components/Quiz/Quiz";
import style from "./Game.module.css";
import Loading from "../../Components/Loading/Loading";
const axios = require("axios");

const Game = () => {
  const { category } = useParams();
  //Elimino espacios y convierto en minusculas
  category.toLowerCase();
  const REQUEST_URL = `http://localhost:3001/api/questions/${category}`;

  const [quiz, setQuiz] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get(REQUEST_URL).then(({ data }) => {
        setQuiz(data);
        setIsLoading(!isLoading);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className={style.gameContainer}>
      <h1 className={style.gameContainer__title}>{category} Quiz</h1>
      {quiz ? <Quiz quiz={quiz.quiz} /> : null}
      <Link className={style.gameContainer__backLink} to="/home">
        Back
      </Link>
    </div>
  );
};

export default Game;

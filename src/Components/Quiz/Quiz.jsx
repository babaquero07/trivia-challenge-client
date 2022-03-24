import React, { useState, useEffect } from "react";
import style from "./Quiz.module.css";
import { useParams } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { category } = useParams();
  const actualURL = `/play/${category}`;
  const [actualQuestion, setActualQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [areDisabled, setAreDisabled] = useState(false);
  const [responses, setResponses] = useState({});

  const handleAnswerSubmit = (isCorrect, e) => {
    if (isCorrect) setScore(score + 1);

    console.log(typeof e.target.value);
    setResponses({
      ...responses,
      [e.target.name]: e.target.value,
    });

    e.target.classList.add(
      isCorrect ? `${style.correct}` : `${style.incorrect}`
    );

    setTimeout(() => {
      if (quiz && actualQuestion === quiz.length - 1) {
        setIsFinished(true);
      } else {
        e.target.classList.remove(
          isCorrect ? `${style.correct}` : `${style.incorrect}`
        );
        setActualQuestion(actualQuestion + 1);
      }
    }, 1300);
  };

  if (isFinished)
    return (
      <div className={style.gameOverContainer}>
        <span className={style.gameOverContainer__title}>
          {" "}
          Your score is {score} of {quiz.length}{" "}
        </span>
        <button
          className={style.gameOverContainer__button}
          onClick={() => (window.location.href = actualURL)}
        >
          {" "}
          Play again
        </button>
        <button className={style.gameOverContainer__button}>Save score</button>
      </div>
    );

  return (
    <div className={style.quizContainer}>
      <div className={style.leftSide}>
        <div className={style.questionNumber}>
          <span>
            Question {actualQuestion + 1} of {quiz.length}
          </span>
          <div className={style.questionTitle}>
            {quiz && quiz[actualQuestion].question}
          </div>
        </div>
        <div className={style.rightSide}>
          {quiz[actualQuestion].options.map((answer, index) => (
            <button
              key={index + 1}
              disabled={areDisabled}
              name={quiz[actualQuestion].question}
              value={answer.answer}
              className={style.optionButton}
              onClick={(e) => handleAnswerSubmit(answer.isCorrect, e)}
            >
              {answer.answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

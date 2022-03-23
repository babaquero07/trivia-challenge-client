import React, { useState, useEffect } from "react";
import style from "./Quiz.module.css";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const quiz = [
    {
      category: "General Knowledge",
      question: "Nutella is produced by the German company Ferrero.",
      options: [
        {
          answer: "true",
          isCorrect: true,
        },
        {
          answer: "false",
          isCorrect: false,
        },
      ],
    },
    {
      category: "General Knowledge",
      question: "The vapor produced by e-cigarettes is actually water.",
      options: [
        {
          answer: "true",
          isCorrect: false,
        },
        {
          answer: "false",
          isCorrect: true,
        },
      ],
    },
    {
      category: "General Knowledge",
      question: "The sum of all the numbers on a roulette wheel is 666.",
      options: [
        {
          answer: "true",
          isCorrect: true,
        },
        {
          answer: "false",
          isCorrect: false,
        },
      ],
    },
    {
      category: "General Knowledge",
      question: "An eggplant is a vegetable.",
      options: [
        {
          answer: "false",
          isCorrect: true,
        },
        {
          answer: "true",
          isCorrect: false,
        },
      ],
    },
  ];

  const { category } = useParams();
  const actualURL = `/play/${category}`;

  const [actualQuestion, setActualQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) setTimeRemaining((prev) => prev - 1);
      if (timeRemaining === 0) setAreDisabled(!areDisabled);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  const handleAnswerSubmit = (isCorrect, e) => {
    if (isCorrect) setScore(score + 1);

    e.target.classList.add(
      isCorrect ? `${style.correct}` : `${style.incorrect}`
    );

    setTimeout(() => {
      if (actualQuestion === quiz.length - 1) {
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
            {quiz[actualQuestion].question}
          </div>
          {!areDisabled ? (
            <span className={style.timeRemaining}>
              Time remaining: {timeRemaining}
            </span>
          ) : (
            <button
              className={style.continueButton}
              onClick={() => {
                setTimeRemaining(10);
                setAreDisabled(false);
                setActualQuestion(actualQuestion + 1);
              }}
            >
              Continue
            </button>
          )}
        </div>
        <div className={style.rightSide}>
          {quiz[actualQuestion].options.map((answer, index) => (
            <button
              key={index + 1}
              disabled={areDisabled}
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

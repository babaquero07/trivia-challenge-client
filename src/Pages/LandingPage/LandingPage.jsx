import React from "react";
import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerContent}>
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You'll can choose one category to play</p>
        <button>
          <Link className={style.link} to="/home">
            Get started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

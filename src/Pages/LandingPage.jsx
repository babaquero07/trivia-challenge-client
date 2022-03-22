import React from "react";
import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.containerContent}>
        <h1>Welcome to the Trivia Challenge!</h1>
        <p>You'll be presented with 10 True or False questions</p>
        <button>
          <a href="/home">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

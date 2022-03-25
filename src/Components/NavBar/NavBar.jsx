import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.navBar}>
      <li>
        <Link className={style.navBar__link} to={"/home"}>
          {" "}
          Home
        </Link>
      </li>
      <li>
        <a href="/quizzes" className={style.navBar__link}>
          Quizzes
        </a>
      </li>
      <li>
        <a href="/scores" className={style.navBar__link}>
          Scores
        </a>
      </li>
      <li>
        <a href="/play/art" className={style.navBar__link}>
          Art Quiz
        </a>
      </li>
      <li>
        <a href="/play/history" className={style.navBar__link}>
          History Quiz
        </a>
      </li>
      <li>
        <a href="/play/vehicles" className={style.navBar__link}>
          Vehicles Quiz
        </a>
      </li>
      <li>
        <a href="/play/geography" className={style.navBar__link}>
          Geography Quiz
        </a>
      </li>

      <li>
        <a href="/play/sports" className={style.navBar__link}>
          Sports Quiz
        </a>
      </li>
      <li>
        <a href="/play/music" className={style.navBar__link}>
          Music Quiz
        </a>
      </li>
    </nav>
  );
};
export default Navbar;

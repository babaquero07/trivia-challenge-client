import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navBar}>
      <li>
        <Link className={style.navBar__link} to="/home">
          Home
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to="/scores">
          Scores
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to="/play/sports">
          Sport Quiz
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to="/play/music">
          Music Quiz
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to="/play/vehicles">
          Vehicles Quiz
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to="/play/history">
          Vehicles Quiz
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to="/play/art">
          Art Quiz
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to="/play/geography">
          Geography Quiz
        </Link>
      </li>
    </nav>
  );
};
export default Navbar;

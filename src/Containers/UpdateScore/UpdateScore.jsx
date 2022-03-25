import React, { useRef } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import scoresServices from "../../Services/score";
import style from "../SaveScore/SaveScore.module.css";

const UpdateScore = ({ quiz }) => {
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      scoreID: quiz.id,
      username: formData.get("username"),
      category: formData.get("category"),
      score: formData.get("score"),
    };

    scoresServices
      .updateScore(data)
      .then(() => {
        swal("Score updated successfully", {
          icon: "success",
        });
        setTimeout(() => {
          navigate("/home");
        }, 2500);
      })
      .catch((err) => {
        swal(`${err}`, {
          icon: "warning",
        });
      });
  };

  return (
    <form ref={form} className={style.formContainer} onSubmit={handleSubmit}>
      <h2>Update Score</h2>
      <ul>
        <li>
          <input
            type="text"
            name="username"
            className={`${style.field__style} ${style.field__split} ${style.align__left}`}
            placeholder="Username"
          />
          <input
            type="text"
            name="category"
            className={`${style.field__style} ${style.field__split} ${style.align__left}`}
            placeholder="Category"
          />
          <input
            type="number"
            name="score"
            min="0"
            max="6"
            className={`${style.field__style} ${style.field__split} ${style.align__right}`}
            placeholder="Score"
          />
        </li>
        <li>
          <input type="submit" defaultValue="Update" />
        </li>
      </ul>
    </form>
  );
};

export default UpdateScore;

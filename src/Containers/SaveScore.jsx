import React, { useRef } from "react";
import style from "./SaveScore.module.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import scoresServices from "../Services/score";

const SaveScore = ({ quiz, responses, score }) => {
  quiz = quiz[0];
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      quiz,
      responses,
      score,
    };

    scoresServices
      .postScore(data)
      .then(() => {
        swal("Score saved sucessfully", {
          icon: "success",
        });
        setTimeout(() => {
          navigate("/scores");
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
      <ul>
        <li>
          <input
            type="text"
            name="username"
            className={`${style.field__style} ${style.field__split} ${style.align__left}`}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            className={`${style.field__style} ${style.field__split} ${style.align__right}`}
            placeholder="Email"
            required
          />
        </li>
        {/* <li>
          <input
            type="text"
            name="field3"
            className={`${style.field__style} ${align__left}`}
            placeholder="Phone"
          />
          <input
            type="url"
            name="field4"
            className={`${style.field__style} ${align__right}`}
            placeholder="Website"
          />
        </li>
        <li>
          <input
            type="text"
            name="field3"
            className="field-style field-full align-none"
            placeholder="Subject"
          />
        </li>
        <li>
          <textarea
            name="field5"
            className="field-style"
            placeholder="Message"
            defaultValue={""}
          />
        </li> */}
        <li>
          <input type="submit" defaultValue="Send Message" />
        </li>
      </ul>
    </form>
  );
};

export default SaveScore;

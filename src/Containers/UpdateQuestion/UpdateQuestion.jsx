import React, { useRef } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import questionServices from "../../Services/question";
import style from "../CreateQuestion/CreateQuestion.module.css";

const UpdateQuestion = ({ question }) => {
  const form = useRef(null);
  const selectRef = useRef("");
  const navigate = useNavigate();

  const categories = [
    "art",
    "history",
    "vehicles",
    "geography",
    "sports",
    "music",
  ];

  const handleSubmit = (e) => {
    console.log(question);
    const category = selectRef.current.value;
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      questionID: question.id,
      category,
      question: formData.get("question"),
      options: [
        {
          answer: formData.get("true") === "on" ? "true" : "false",
          isCorrect: !formData.get("false") ? !false : true,
          answer2: formData.get("true") === "on" ? "false" : "true",
          isCorrect2: !formData.get("false") ? !true : false,
        },
      ],
    };
    questionServices
      .updateQuestion(data)
      .then(() => {
        swal("Question update sucessfully", {
          icon: "success",
        });
        e.target.reset();
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
    <form ref={form} onSubmit={handleSubmit} className={style.formContainer}>
      <div className={style.formContainer__category}>
        <label htmlFor="categories">Choose one category</label>
        <select ref={selectRef} name="categories">
          {categories.map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>
      </div>
      <input
        className={style.formContainer__question}
        type="text"
        name="question"
        placeholder="Type the question..."
        required
      />
      <label className={style.formContainer__correctOption}>
        Correct option
      </label>
      <div className={style.optionsContainer}>
        <input name="true" type="checkbox" />
        <label>True</label>
        <input name="false" type="checkbox" />
        <label>False</label>
      </div>

      <input
        className={style.formContainer__createQuestion}
        type="submit"
        value="Update question"
      />
    </form>
  );
};

export default UpdateQuestion;

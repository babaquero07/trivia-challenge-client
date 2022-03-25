import React, { useState, useEffect } from "react";
import style from "./Questions.module.css";
import swal from "sweetalert";
import { GrUpdate } from "react-icons/gr";
import { FiDelete } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import questionServices from "../../Services/question";

const Questions = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [questionsData, setQuestionsData] = useState(null);
  const [questionToUpdate, setQuestionToUpdate] = useState(null);
  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);

  useEffect(() => {
    questionServices.getAllQuestions().then((data) => {
      setQuestionsData(data);
      setIsLoading(!isLoading);
    });
  }, []);

  const handleUpdate = (info) => {
    setQuestionToUpdate(info);
    setToggleUpdateForm(!toggleUpdateForm);
  };

  const handleDelete = () => {
    const { id } = questionsData[0];

    questionServices
      .deleteQuestion(id)
      .then(({ data }) => {
        swal(data.msg, {
          icon: "success",
        });
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch(({ data }) => {
        swal(data.error, {
          icon: "warning",
        });
      });
  };

  if (isLoading) return <Loading />;

  return (
    <div className={style.score}>
      <h1>Questions</h1>
      <div className={style.questionsContainer}>
        <table className={style.tableContent}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Category</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {questionsData &&
              questionsData.map((info) => (
                <tr key={info.id}>
                  <td key={"random"}> {info.id}</td>
                  <td key={info.question}> {info.question}</td>
                  <td key={info.id}> {info.category}</td>
                  <td key={"options"}>
                    <button
                      className={style.optionButton}
                      onClick={() => handleUpdate(info)}
                    >
                      <GrUpdate />
                    </button>
                    <button
                      className={style.optionButton}
                      onClick={handleDelete}
                    >
                      <FiDelete />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Questions;

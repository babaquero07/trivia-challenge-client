import React, { useEffect, useState } from "react";
import style from "./Scores.module.css";
import scoresServices from "../../Services/score";
import swal from "sweetalert";
import { GrUpdate } from "react-icons/gr";
import { FiDelete } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import UpdateScore from "../../Containers/UpdateScore/UpdateScore";

const Scores = () => {
  const [scoresData, setScoresData] = useState(null);
  const [scoreToUpdate, setScoreToUpdate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    scoresServices.getAllScores().then((data) => {
      setScoresData(data);
      setIsLoading(!isLoading);
    });
  }, []);

  const handleDelete = () => {
    const { id } = scoresData[0];
    scoresServices
      .deleteScore(id)
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

  const handleUpdate = (info) => {
    setToggleUpdateForm(!toggleUpdateForm);
    setScoreToUpdate(info);
  };

  if (isLoading) return <Loading />;

  return (
    <div className={style.scoresContainer}>
      <h1>Scores</h1>
      <table className={style.tableContent}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Category</th>
            <th>Score</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {scoresData &&
            scoresData.map((info, ind) => (
              <tr key={info.id}>
                <td key={ind}>{info.username}</td>
                <td key={ind + 1}>{info.quizCategory}</td>
                <td key={ind + 2}>{info.score}</td>
                <td key={ind + 3}>
                  <button
                    className={style.optionButton}
                    onClick={() => handleUpdate(info)}
                  >
                    <GrUpdate />
                  </button>
                  <button className={style.optionButton} onClick={handleDelete}>
                    <FiDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {toggleUpdateForm && scoreToUpdate && (
        <UpdateScore quiz={scoreToUpdate} />
      )}
    </div>
  );
};

export default Scores;

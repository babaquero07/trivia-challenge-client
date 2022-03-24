import React, { useEffect, useState } from "react";
import style from "./Scores.module.css";
import scoresServices from "../../Services/score";
import swal from "sweetalert";
import { GrUpdate } from "react-icons/gr";
import { FiDelete } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Scores = () => {
  const [scoresData, setScoresData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div className={style.scoresContainer}>
      <h1>Scores</h1>
      <table className={style.tableContent}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
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
                <td key={ind + 1}>{info.email}</td>
                <td key={ind + 2}>{info.quizCategory}</td>
                <td key={ind + 3}>{info.score}</td>
                <td key={ind + 4}>
                  <button className={style.optionButton}>
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
    </div>
  );
};

export default Scores;

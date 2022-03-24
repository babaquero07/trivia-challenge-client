import axios from "axios";

const BASE_URL = "http://localhost:3001/api/scores";

const getAllScores = async () => (await axios.get(BASE_URL)).data;

const postScore = async (data) => {
  console.log(data);
  return await axios.post(BASE_URL, data);
};

const deleteScore = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};

const scoresServices = {
  getAllScores,
  postScore,
  deleteScore,
};

export default scoresServices;

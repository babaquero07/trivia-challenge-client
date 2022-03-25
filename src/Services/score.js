import axios from "axios";

const BASE_URL = "/api/scores";

const getAllScores = async () => (await axios.get(BASE_URL)).data;

const postScore = async (data) => await axios.post(BASE_URL, data);

const deleteScore = async (id) => await axios.delete(`${BASE_URL}/${id}`);

const updateScore = async (data) => await axios.put(BASE_URL, data);

const scoresServices = {
  getAllScores,
  postScore,
  deleteScore,
  updateScore,
};

export default scoresServices;

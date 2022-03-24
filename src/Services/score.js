import axios from "axios";

const BASE_URL = "http://localhost:3001/api/scores";

const postScore = async (data) => {
  console.log(data);
  return await axios.post(BASE_URL, data);
};

const scoresServices = {
  postScore,
};

export default scoresServices;

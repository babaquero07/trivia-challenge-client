import axios from "axios";

const BASE_URL = "http://localhost:3001/api/questions";

const postQuestion = async (data) => await axios.post(BASE_URL, data);

const questionServices = {
  postQuestion,
};

export default questionServices;

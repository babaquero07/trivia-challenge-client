import axios from "axios";

const BASE_URL = "http://localhost:3001/api/questions";

const getAllQuestions = async () => (await axios.get(BASE_URL)).data;

const postQuestion = async (data) => await axios.post(BASE_URL, data);

const deleteQuestion = async (id) => await axios.delete(`${BASE_URL}/${id}`);

const questionServices = {
  postQuestion,
  getAllQuestions,
  deleteQuestion,
};

export default questionServices;

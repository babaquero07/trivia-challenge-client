import axios from "axios";

const BASE_URL = "/api/questions";

const getAllQuestions = async () => (await axios.get(BASE_URL)).data;

const postQuestion = async (data) => await axios.post(BASE_URL, data);

const updateQuestion = async (data) => await axios.put(BASE_URL, data);

const deleteQuestion = async (id) => await axios.delete(`${BASE_URL}/${id}`);

const questionServices = {
  postQuestion,
  getAllQuestions,
  deleteQuestion,
  updateQuestion,
};

export default questionServices;

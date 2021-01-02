import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';


const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNewNote = async (content) => {
  const noteObject = { content, important: false };
  const response = await axios.post(baseUrl, noteObject);
  return response.data;
};


const updateNote = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

export default { getAll, createNewNote, updateNote };
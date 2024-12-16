import axios from "axios";

const API_BASE_URL = "https://todolist-todolist-backend.vercel.app/"; // Adjust port if needed

export const getTasks = async () => axios.get(API_BASE_URL);
export const createTask = async (task) => axios.post(API_BASE_URL, task);
export const updateTask = async (id, updatedTask) =>
  axios.put(`${API_BASE_URL}/${id}`, updatedTask);
export const deleteTask = async (id) => axios.delete(`${API_BASE_URL}/${id}`);

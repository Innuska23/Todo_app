import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (limit = 10) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: { _limit: limit },
    });
    return response.data || [];
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await axios.post(API_BASE_URL, newTodo);
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    return null;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    return null;
  }
};

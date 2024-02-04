import axios from "axios";
import { endPoints } from "./endpint";
import { getUserData } from "../utils/localStorage";

const authHeader = () => {
  const data = getUserData();
  const jwt = data?.authToken;
  const headers = {
    Authorization: `Bearer ${jwt}`,
  };
  return headers;
};

export const triggerLogin = async (request) => {
  const [error, response] = await axios.post(endPoints.login, request);
  if (error) Promise.reject(error);
  if (response) Promise.resolve(response);
};

export const triggerSignup = async (request) => {
  try {
    const response = await axios.post(endPoints.signup, request);
    return Promise.resolve(response?.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchTodos = async () => {
  try {
    const response = await axios.get(endPoints.fetchTodo, {
      headers: authHeader(),
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createTodo = async (request) => {
  try {
    const response = await axios.post(endPoints.createTodo, request, {
      headers: authHeader(),
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const toggleCompletion = async ({ id, request }) => {
  try {
    const response = await axios.put(endPoints.todos + id, request, {
      headers: authHeader(),
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateTodo = async ({ id, request }) => {
  try {
    const response = await axios.put(endPoints.todos + id, {
      headers: authHeader(),
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteTodo = async ({ id }) => {
  try {
    const response = await axios.delete(endPoints.todos + id, {
      headers: authHeader(),
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

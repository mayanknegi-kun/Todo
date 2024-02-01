import axios from "axios";
import { endPoints } from "./endpint";

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

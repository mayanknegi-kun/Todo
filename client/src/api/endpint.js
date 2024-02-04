const baseUrl = import.meta.env.VITE_API_KEY;
export const endPoints = {
  signup: baseUrl + "/user/signup",
  login: baseUrl + "/user/login",
  fetchTodo: baseUrl + "/todos/list",
  createTodo: baseUrl + "/todos/create",
  todos: baseUrl + "/todos/",
};

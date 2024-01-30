export const updateUserData = (data) => {
  const existingData = localStorage.getItem("todoUser");
  const parsedData = existingData ? JSON.parse(existingData) : {};
  const updatedData = JSON.stringify({ ...parsedData, ...data });
  localStorage.setItem("todoUser", updatedData);
  return;
};

export const getUserData = () => {
  const data = localStorage.getItem("todoUser");
  const parsedData = data ? JSON.parse(data) : {};

  return parsedData;
};

import { getUserData } from "./localStorage";

export const isUserSignedIn = () => {
  const userData = getUserData();
  if (!userData) return false;
  if (!userData?.isLoggedIn) return false;
  return true;
};

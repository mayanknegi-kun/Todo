import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { triggerLogin, triggerSignup } from "../api/apiHandler";
import { updateUserData } from "../utils/localStorage";

const useAuth = () => {
  const [authType, setAuthType] = useState({ login: true });
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const targetId = e.target.id;
    setInputData((prev) => ({
      ...prev,
      [targetId]: value,
    }));
  };

  const handleAuth = async () => {
    try {
      let response;
      if (!authType.login) {
        response = await triggerLogin(inputData);
      } else {
        response = await triggerSignup(inputData);
      }
      updateUserData({ authToken: response.authToken });
      setInputData({
        username: "",
        email: "",
        password: "",
      });
      if (response?.authToken) {
        navigate("todo");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const toggleAuthOption = (isLogin) => {
    setAuthType({ login: isLogin });
  };

  return [authType, inputData, handleChange, handleAuth, toggleAuthOption];
};

export default useAuth;

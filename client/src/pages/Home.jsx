import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signup } from "../api/apiHandler";
import { updateUserData } from "../utils/localStorage";
import { useState } from "react";

const Home = () => {
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const targetId = e.target.id;
    setInputData((prev) => ({
      ...prev,
      [targetId]: value,
    }));
  };

  const handleLogin = () => {
    signup(inputData)
      .then((res) => {
        updateUserData({ authToken: res.authToken });
        setInputData({
          username: "",
          email: "",
          password: "",
        });
      })
      .catch((e) => console.log(e));
  };
  console.log();
  return (
    <>
      <div className="text-3xl ">Signup</div>
      <div className=" m-auto grid w-1/2 gap-3">
        <TextField
          id="username"
          label="Username"
          variant="standard"
          value={inputData?.username}
          onChange={handleChange}
        />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          value={inputData?.email}
          onChange={handleChange}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          value={inputData?.password}
          onChange={handleChange}
        />
        <Button variant="outlined" onClick={handleLogin}>
          Signup
        </Button>
      </div>
    </>
  );
};

export default Home;

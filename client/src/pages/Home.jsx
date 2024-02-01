import { triggerLogin, triggerSignup } from "../api/apiHandler";
import { updateUserData } from "../utils/localStorage";
import { useState } from "react";

const Home = () => {
  const [signup, setSignup] = useState(true);
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

  const handleAuth = async () => {
    try {
      let response;
      if (signup) {
        response = await triggerSignup(inputData);
      } else {
        response = await triggerLogin(inputData);
      }
      updateUserData({ authToken: response.authToken });
      setInputData({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  const toggleAuthOption = (signup) => {
    setSignup(signup);
  };

  const formContent = ({ signup }) => {
    return (
      <div className="flex gap-8 h-full">
        <div
          className={`flex aligb-center justify-center p-8 h-full w-1/2 bg-[#FFFFFF] order-${
            signup ? "1" : "2"
          }`}
        >
          {signup ? (
            <p className="text-[#FF5631] font-light">
              Welcome aboard, New Friend!. Congratulations on taking the first
              step towards a more organized and productive life. Get ready to
              unlock your full potential as we embark on this journey together.
              From setting goals to crushing them, our todo app is here to
              support you every step of the way. Let's start building your
              roadmap to success!
            </p>
          ) : (
            <p className="text-[#FF5631] font-light">
              Welcome back. Your todos await, ready to be organized,
              prioritized, and conquered. Let's dive in and make today a
              success.
            </p>
          )}
        </div>
        <div className={`flex flex-col p-10 w-1/2 order-${signup ? "2" : "1"}`}>
          <label htmlFor="username" className="text-[#FF5631] pb-3">
            Username:
          </label>
          <input
            id="username"
            label="Username"
            className="rounded h-8 mb-4 w-3/4"
            value={inputData?.username}
            onChange={handleChange}
          />
          {signup && (
            <>
              <label htmlFor="username" className="text-[#FF5631] pb-3">
                Email:
              </label>
              <input
                id="email"
                label="Email"
                className="rounded h-8 mb-4 w-3/4"
                value={inputData?.email}
                onChange={handleChange}
              />
            </>
          )}
          <label htmlFor="username" className="text-[#FF5631] pb-3">
            Password:
          </label>
          <input
            id="password"
            label="Password"
            type="password"
            className="rounded h-8 mb-8 w-3/4"
            value={inputData?.password}
            onChange={handleChange}
          />
          <button
            className="bg-[#FF5631] rounded h-8 mb-8 w-3/4"
            onClick={handleAuth}
          >
            {signup ? "SIGN UP" : "Login"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen flex justify-center align-center bg-[#CEBEA4]">
      <div className="h-4/5 w-4/5 pt-20">
        <div className="flex gap-10 mb-10">
          <button
            className={`font-sans font-medium text-lg text-[${
              signup ? "#FF5631" : "#FFFFFF"
            }]  hover:text-[#FF5631]`}
            onClick={() => toggleAuthOption(true)}
          >
            SIGN UP
          </button>
          <button
            className={`font-sans font-medium text-lg text-[${
              !signup ? "#FF5631" : "#FFFFFF"
            }] hover:text-[#FF5631]`}
            onClick={() => toggleAuthOption(false)}
          >
            LOGIN
          </button>
        </div>
        <div className="flex flex-col h-full bg-[#0D0D0D]">
          {formContent({ signup: signup })}
        </div>
      </div>
    </div>
  );
};

export default Home;

const AuthForm = ({ inputData, handleAuth, handleChange, signup }) => {
  return (
    <div>
      <div className={`p-10 w-full`}>
        <div className=" flex flex-col mb-2">
          <label htmlFor="username" className="align-left text-[#9EA1D4]">
            Username:
          </label>
          <input
            id="username"
            label="Username"
            className="rounded h-8 my-2 rounded outline-none p-4"
            value={inputData?.username}
            onChange={handleChange}
          />
        </div>
        {signup && (
          <div className="mb-2 flex flex-col ">
            <label htmlFor="username" className="text-[#9EA1D4]">
              Email:
            </label>
            <input
              id="email"
              label="Email"
              className="rounded h-8 my-2 rounded outline-none p-4"
              value={inputData?.email}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="mb-2 flex flex-col ">
          <label htmlFor="username" className="text-[#9EA1D4]">
            Password:
          </label>
          <input
            id="password"
            label="Password"
            type="password"
            className="rounded h-8 my-2 rounded outline-none p-4"
            value={inputData?.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-[#A8D1D1] rounded h-8 mt-4 w-full text-white"
          onClick={handleAuth}
        >
          {signup ? "SIGN UP" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;

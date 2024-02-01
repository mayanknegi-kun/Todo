import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { getUserData } from "./utils/localStorage";

function App() {
  const userData = getUserData();
  return (
    <Routes>
      <Route element={<Home userData={userData} />} path="/"></Route>
      {/* <Route element={<Signup />} path="/signup"></Route>
      <Route element={<Login />} path="/login"></Route>
      <Route element={<Todo />} path="/todo"></Route>
      <Route element={<NoRoute />} path="*"></Route> */}
    </Routes>
  );
}

export default App;

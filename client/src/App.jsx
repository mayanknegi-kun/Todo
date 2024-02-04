import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { getUserData } from "./utils/localStorage";
import Todo from "./pages/Todo";

function App() {
  const userData = getUserData();

  return (
    <Routes>
      <Route path="/" element={<Home userData={userData} />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;

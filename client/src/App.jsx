import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { getUserData } from "./utils/localStorage";
import Todo from "./pages/Todo";
import LayoutWithHeader from "./LayoutWithHeader";

function App() {
  const userData = getUserData();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutWithHeader>
            <Home userData={userData} />
          </LayoutWithHeader>
        }
      />
      <Route
        path="/todo"
        element={
          <LayoutWithHeader>
            <Todo />
          </LayoutWithHeader>
        }
      />
    </Routes>
  );
}

export default App;

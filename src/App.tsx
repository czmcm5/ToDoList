import { Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import LoginRoute from "./Routes/LoginRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginRoute component={Home} />} />
    </Routes>
  );
}

export default App;

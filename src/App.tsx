import { Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import LoginRoute from "./Routes/LoginRoute";
import AppLayout from "./Layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<LoginRoute component={Home} />} />
      </Route>
    </Routes>
  );
}

export default App;

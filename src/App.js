import "./App.css";
import Loginpg from "./pages/Loginpg";
import Homepg from "./pages/Homepg";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpg />} />
        <Route path="/home" element={<Homepg />} />
      </Routes>
    </div>
  );
}

export default App;

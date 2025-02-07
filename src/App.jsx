//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import Success from "./pages/SuccessPage";
import MainPage from "./pages/MainPage";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/success" element={<Success />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

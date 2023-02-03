import "./App.css";
import DashBoard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import NOTFOUND from "./components/pages/NOTFOUND";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NOTFOUND />} />
      </Routes>
    </Router>
  );
}

export default App;

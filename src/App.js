import "./App.css";
import NavBar from "./components/Navbar";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Login />
      <Routes>
        {/* Instead of Swicth */}
        <Route path="/" />
      </Routes>
      {/* Instead of Swicth */}
    </Router>
  );
}

export default App;

import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Instead of Swicth */}
        <Route path="/" />
      </Routes>
      {/* Instead of Swicth */}
    </Router>
  );
}

export default App;

import "./App.css";
import DashBoard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Apt1 from "./components/pages/apartments/1";
import Apt2 from "./components/pages/apartments/2";
import Apt3 from "./components/pages/apartments/3";
import Apt4 from "./components/pages/apartments/4";
import NOTFOUND from "./components/pages/NOTFOUND";
import Account_profile from "./components/pages/Account_profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/250,000RentedDubai-Businessbay-1" element={<Apt1 />} />
        <Route path="/500,000RentedDubai-JBR" element={<Apt2 />} />
        <Route path="/750,000RentedDubai-Businessbay-1" element={<Apt3 />} />
        <Route
          path="/750,000RentedDubai-InternationalCity"
          element={<Apt4 />}
        />
        <Route path="/account_profile" element={<Account_profile />} />
        <Route path="*" element={<NOTFOUND />} />
      </Routes>
    </Router>
  );
}

export default App;

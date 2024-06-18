import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Account, Home, Login, Register } from "./pages/index";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

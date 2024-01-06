import { Routes, Route, Link, Router } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cms from "./pages/Cms";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cms" element={<Cms />} />
      </Routes>
    </div>
  );
}

export default App;
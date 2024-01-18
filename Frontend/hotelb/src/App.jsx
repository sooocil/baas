import { Routes, Route, Link, Router } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cms from "./pages/Cms";
import { Fav } from "./pages/Fav";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cms" element={<Cms />} />
      </Routes>
    </div>
  );
}

export default App;

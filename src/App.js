import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Logout from "./pages/profile/Logout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

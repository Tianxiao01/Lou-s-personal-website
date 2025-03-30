import { useState } from "react";
import Navbar from "./Navbar";
//importing subpages
import Home from "./pages/Home/Home";
import LongTerm from "./pages/Projects/LongTerm";
import Future from "./pages/Future/Future";
import ShortTerm from "./pages/Experience/ShortTerm";
//css
import "./App.css";
//React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router  basename="/Lou-s-personal-website">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<LongTerm />} />
          <Route path="/Ongoing" element={<Future />} />
          <Route path="/Experience" element={<ShortTerm />} />
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "./Pages/Home/index";
import Blog from "./Pages/Blog/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

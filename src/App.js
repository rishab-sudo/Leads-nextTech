import React from "react";
// import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import SmoothScroll from "./components/SmoothScroll";
import Home  from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* Smooth scrolling for the complete website */}
      <SmoothScroll />

      <div className="App">
        <Navbar />
<Home/>
      <Footer />
      </div>
    </div>
  );
}

export default App;
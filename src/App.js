import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import  Navbar  from "./components/Navbar";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import StrengthCards from "./components/StrengthCards";
import Process from "./components/Process";
import ExploreTech from "./components/ExploreTech";
import StrategicPartnership from "./components/StrategicPartnership";
import Infrastructure from "./components/Infrastructure";



function App() {
  return (
    <>
        <div className="App">
<Navbar/>

   <Stats/>
   <StrengthCards/>
   <Process/>
   <ExploreTech/>
   <Infrastructure/>
   <StrategicPartnership/>
    </div>
  <Footer/>
    </>

  );
}

export default App;


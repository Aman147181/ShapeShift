import Header from "./components/Header";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ExerciseDetail from "./components/ExerciseDetail";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <Router>
      <div className="sm:px-20 px-2  dark:bg-slate-500  bg-slate-200 min-h-screen">
        <section id='#'>
        <Header darkTheme={darkTheme } toggleDarkTheme={toggleDarkTheme} />
        </section>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
      </div>
      </Router>
      
    </div>
    
  )
}
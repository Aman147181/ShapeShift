import Hero from "./components/Hero";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import Exercises from "./components/Exercises";

export default function App() {
  const [search, setSearch] = useState("all"); // State to store the selected option
  const [exercises, setExercises] = useState([]);


  
  
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleDarkTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  return (
    <div className={darkTheme?'dark':''}>
      <div className="sm:px-20 px-2  dark:bg-slate-500  bg-slate-200 min-h-screen">
        <section id='#'>
        <Header darkTheme={darkTheme } toggleDarkTheme={toggleDarkTheme} />
        </section>
        
        <Hero />
        <section id="exercise" className="pt-24">
        <MainPage search={search} setSearch={setSearch} exercises={exercises} setExercises={setExercises } />
        </section>
        <Exercises exercises={exercises} setExercises={setExercises } />
    </div>
    </div>
    
  )
}
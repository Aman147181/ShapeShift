import React from 'react'
import Hero from './Hero'
import MainPage from './MainPage'
import Exercises from './Exercises'
import { useState } from 'react'
const Home = () => {
    const [search, setSearch] = useState("all"); // State to store the selected option
    const [exercises, setExercises] = useState([]);
    return (
        <div>
            <Hero />
            <section id="exercise" className="pt-24">
                <MainPage search={search} setSearch={setSearch} exercises={exercises} setExercises={setExercises} />
            </section>
            <Exercises exercises={exercises} setExercises={setExercises} />
        </div> 
  );
}

export default Home
import React, { useEffect, useState } from "react";

const MainPage = (props) => {
    const handleSelectChange = (event) => {
        props.setSearch(event.target.value); // Update the search state when an option is selected
    };
    
    
let url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${props.search}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa5e520d6amsha7256b2803f7ec2p1717abjsnff3bb80ab9a0',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};



  const fetchData = async () => {
      if (props.search === 'all') {
          url = 'https://exercisedb.p.rapidapi.com/exercises/';
  }
       
  try {
    const response = await fetch(url, options);
      const result = await response.json();
    props.setExercises(result);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

  
  useEffect(() => {
      const Url = `https://exercisedb.p.rapidapi.com/exercises/`;
      const fetchDataAtStart = async () => {
          try {
            const response = await fetch(Url, options);
              const result = await response.json();
              props.setExercises(result);
            console.log(result);
          } catch (error) {
            console.error(error);
          }
      };
      
      fetchDataAtStart();
    
  }, [])
  
  
  
    
    return (
    <div className="min-w-full mt-10">
      <h1 className="text-4xl dark:text-gray-100 font-medium text-gray-900 text-center">
        Awesome Exercises You should know
      </h1>
      <div className="w-full flex justify-center h-[80px] items-center mt-5 space-x-2">
        <select
          value={props.search}
          onChange={handleSelectChange}
          className="mt-1 block w-1/2 h-[50px] border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
        >
          <option value="all">all</option>
          <option value="back">back</option>
          <option value="cardio">cardio</option>
          <option value="chest">chest</option>
          <option value="lower arms">lower arms</option>
          <option value="lower legs">lower legs</option>
          <option value="neck">neck</option>
          <option value="shoulders">shoulders</option>
          <option value="upper arms">upper arms</option>
          <option value="waist">waists</option>
        </select>
        <button
          className="h-[50px] p-2 sm:px-6 px-4 rounded-xl text-xl text-white bg-rose-500"
          onClick={fetchData}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MainPage;

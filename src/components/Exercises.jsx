import React from "react";
import { Link } from "react-router-dom";
const Exercises = (props) => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-rose-800 mb-5">Showing Results</h1>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 md:grid-cols-3 xl:grid-cols-4 mt-5">
        {props.exercises.map((el) => (
           
          <div className="p-2 flex-col space-x-10 " key={el.id}>
            <Link to={`/exercise/${el.id}`}>

            <img src={el.gifUrl} loading="lazy" />
            <h1 className="text-center text-slate-900 dark:text-gray-100 text-2xl font-medium mt-4">{el.name}</h1>
            </Link>
          
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Exercises;

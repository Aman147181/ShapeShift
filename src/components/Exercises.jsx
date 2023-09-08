import React from "react";

const Exercises = (props) => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-black">Showing Results</h1>
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 md:grid-cols-3 xl:grid-cols-4 mt-5">
        {props.exercises.map((el) => (
          <div className="p-2 flex-col space-x-10">
            <img src={el.gifUrl} />
            <h1 className="text-center text-slate-900 text-2xl font-medium mt-4">{el.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;

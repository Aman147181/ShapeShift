import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:ml-36 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium font-lobster text-gray-700 dark:text-gray-100">
      Sweat, Smile and Repeat
      </h1>
      <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300 text-lg ">
      Explore Thousands of Dynamic Exercises for Your Fitness Adventure! Whether you're a fitness enthusiast or a beginner, we offer a diverse range of workouts to help you reach your goals. From strength to flexibility, cardio to core, it's your ultimate fitness companion!!
       
          </p>
          <button
          className="h-[50px] p-2 sm:px-6 px-4 rounded-lg text-xl text-white bg-rose-500 hover:bg-rose-600 flex items-center justify-center"
          ><a href="#exercise">
              Explore Exercises
        </a>
          
        </button>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center sm:h-[500px]"
        alt="hero"
        src="header.png"
      />
    </div>
  </div>
</section>

  );
};

export default Hero;

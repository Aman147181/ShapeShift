import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import TargetImage from "../assets/target.png"
import BodyImage from "../assets/body-part.png"
import EquipmentImage from "../assets/equipment.png"
const ExerciseDetail = (props) => {
  let { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const exerciseOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4c1087d55emsh4404d05ba981e72p1b21c7jsn0a819f22a388",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      const result = await exerciseDetailData.json();
      console.log(result);
      setExerciseDetail(result);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-5xl mb-2 text-red-400">
              {exerciseDetail.name}
            </h1>
            <div className="leading-relaxed dark:text-gray-300 text-gray-800 text-3xl mt-10">
              Exercises keep you strong. <span className="text-red-400">{`${exerciseDetail.name}`}</span> is the best exercise to target your <span className="text-red-400" >{`${exerciseDetail.target}`}</span> It will help you improve your mood and energy.
            </div>
          </div>
          <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/2">
            <img src={BodyImage} className="bg-slate-200 rounded-lg p-5 mx-auto" />
            <p className=" font-medium text-lg dark:text-gray-200 text-gray-800 text-center">
              {exerciseDetail.bodyPart}
            </p>
          </div>
          <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/2">
            <img src={TargetImage} className="bg-slate-200 rounded-lg p-5 mx-auto " />
            <p className=" font-medium text-lg dark:text-gray-200 text-gray-800 text-center">
              {exerciseDetail.target}
            </p>
          </div>
          <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/2">
            <img src={EquipmentImage} className="bg-slate-200 rounded-lg p-5 mx-auto"/>
            <p className=" font-medium text-lg dark:text-gray-200 text-gray-800 text-center ">
              {exerciseDetail.equipment}
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src={exerciseDetail.gifUrl}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default ExerciseDetail;

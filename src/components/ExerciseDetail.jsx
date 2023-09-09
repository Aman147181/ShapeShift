import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import TargetImage from "../assets/target.png";
import BodyImage from "../assets/body-part.png";
import EquipmentImage from "../assets/equipment.png";
import Loader from "./Loader";
const ExerciseDetail = (props) => {
  let { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [loading, setLoading] = useState(false);
  const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa5e520d6amsha7256b2803f7ec2p1717abjsnff3bb80ab9a0',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

  const YoutubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa5e520d6amsha7256b2803f7ec2p1717abjsnff3bb80ab9a0',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

  useEffect(() => {
      const fetchExercisesData = async () => {
          setLoading(true);
      const exerciseDetailData = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      const exerciseResult = await exerciseDetailData.json();
          setExerciseDetail(exerciseResult);
          setLoading(false);
      console.log(exerciseResult);
    };

      const fetchExercisesVideoData = async () => {
        setLoading(true);
      const exerciseDetailDataVideo = await fetch(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name} exercise`,
        YoutubeOptions
      );
      const result = await exerciseDetailDataVideo.json();
      console.log(result.contents);

          setExerciseVideos(result.contents);
          setLoading(false);
    };
    fetchExercisesVideoData();
    fetchExercisesData();
  }, [id]);

  return (
      <section className="text-gray-600 body-font">
          {loading ? (<div className="flex h-screen justify-center items-center"><Loader /></div>) :
              <div>
                  <div className="container px-2 py-24 mx-auto flex flex-wrap">
        
                      <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                          <div className="w-full sm:p-4 px-4 mb-6">
                              <h1 className="title-font font-medium text-5xl mb-2 dark:text-slate-200 text-slate-700">
                                  {exerciseDetail.name}
                              </h1>
                              <div className="leading-relaxed dark:text-gray-300 text-gray-800 text-3xl mt-10">
                                  Exercises keep you strong.{" "}
                                  <span className="text-red-400">{`${exerciseDetail.name}`}</span>{" "}
                                  is the best exercise to target your{" "}
                                  <span className="text-red-400">{`${exerciseDetail.target}`}</span>{" "}
                                  It will help you improve your mood and energy.
                              </div>
                          </div>
                          <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/2">
                              <img
                                  src={BodyImage}
                                  className="bg-slate-200 rounded-lg p-5 mx-auto"
                              />
                              <p className=" font-medium text-lg dark:text-gray-200 text-gray-800 text-center">
                                  {exerciseDetail.bodyPart}
                              </p>
                          </div>
                          <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/2">
                              <img
                                  src={TargetImage}
                                  className="bg-slate-200 rounded-lg p-5 mx-auto "
                              />
                              <p className=" font-medium text-lg dark:text-gray-200 text-gray-800 text-center">
                                  {exerciseDetail.target}
                              </p>
                          </div>
                          <div className="p-4 sm:w-1/3 lg:w-1/3 w-1/2">
                              <img
                                  src={EquipmentImage}
                                  className="bg-slate-200 rounded-lg p-5 mx-auto"
                              />
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
                  <h1 className="text-5xl text-gray-900 dark:text-gray-300 mb-10">Exercise Videos for <span className="text-red-400 font-medium">{`${exerciseDetail.name}`}</span></h1>
                  <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 gap-y-4">
                      {exerciseVideos?.slice(0, 8)?.map((item, index) => (
                          <a
                              key={index}
                              className="exercise-video"
                              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                              target="_blank"
                              rel="noreferrer"
                          >
                              <div className=" bg-rose-50 border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-700">
                                  <img
                                      className="rounded-t-lg"
                                      src={item.video.thumbnails[0].url}
                                      alt=""
                                  />

                                  <div className="p-5">
                                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                                          {item.video.title}
                                      </h5>
                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                                          {item.video.channelName}
                                      </p>
                                  </div>
                              </div>
                          </a>
                      ))}
                  </div>
              </div>}
    </section>
  );
};

export default ExerciseDetail;

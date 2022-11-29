import axios from "axios";
import React, { useEffect, useState } from "react";

//create reusable component
const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  //when url changes, the component will fire off again
  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  //console.log(movies);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center"></div>
      <div id={"slider"}>
        {movies.map((item, id) => (
          <div className="w-[160px] sm:w-[280px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img
              className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
              alt={item?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
              <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                {item?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Row;

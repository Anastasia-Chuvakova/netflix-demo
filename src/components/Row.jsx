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
        {movies.map((item, id) => {
          <div className="w-[160px] sm:w-[280px] lg:w-[280px] inline-block cursor-pointer relative p-2"></div>;
        })}
      </div>
    </>
  );
};

export default Row;

import React from "react";
import SavedShows from "../components/SavedShows";
//import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="  w-full h-[400px] object-cover"
          src="https://th.bing.com/th/id/R.eb513551a480899bccab61d5a2cf4cf2?rik=BDSxtMjNL3779w&pid=ImgRaw&r=0"
          alt="background image"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;

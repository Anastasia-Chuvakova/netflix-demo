import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

export const Home = () => {
  return (
    <>
      <Main />
      <Row title="Coming soon" fetchURL={requests.reqUpcoming} />
      <Row title="Popular" fetchURL={requests.reqPopular} />
      <Row title="Trending" fetchURL={requests.reqTrending} />
      <Row title="Top Rated" fetchURL={requests.reqTopRated} />
    </>
  );
};

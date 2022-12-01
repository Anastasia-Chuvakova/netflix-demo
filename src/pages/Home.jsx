import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

//use uuid to have unique id, as an extra security measure
import uuid from "react-uuid";

export const Home = () => {
  return (
    <>
      <Main />
      <Row rowId={uuid()} title="Coming soon" fetchURL={requests.reqUpcoming} />
      <Row rowId={uuid()} title="Popular" fetchURL={requests.reqPopular} />
      <Row rowId={uuid()} title="Trending" fetchURL={requests.reqTrending} />
      <Row rowId={uuid()} title="Top Rated" fetchURL={requests.reqTopRated} />
    </>
  );
};

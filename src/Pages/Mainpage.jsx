import React from "react";
import HotArticle from "../Components/Hot Article/HotArticle";
import Navbar from "../Components/Navbar/Navbar";

const Mainpage = () => {
  return (
    <div className="bg-blue-500">
      <Navbar />
      <HotArticle />
    </div>
  );
};

export default Mainpage;

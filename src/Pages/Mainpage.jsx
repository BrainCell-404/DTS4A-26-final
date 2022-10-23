import React from "react";
import Footer from "../Components/Footer/Footer";
import HotArticle from "../Components/Hot Article/HotArticle";
import LatestNews from "../Components/Latest News/LatestNews";
import Navbar from "../Components/Navbar/Navbar";

const Mainpage = () => {
  return (
    <div className="bg-blue-500">
      <Navbar />
      <HotArticle />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Mainpage;

import React from "react";
import moment from "moment-timezone";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import userSearch, { selectArticles } from "../Stores/Store3";

const UserSearch = () => {
  const Articles = userSearch(selectArticles);

  return (
    <div className="">
      <Navbar />
      <div className="px-5 lg:px-16 lg:py-12 content grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lf:gap-x-5 lf:gap-y-8">
        {Articles?.map((article, index) => {
          return (
            <div
              key={index}
              className="flex justify-center basis-3/12 hover:scale-105 h-60"
            >
              <div className="rounded-lg shadow-lg bg-white max-w-sm p-5">
                <div className="flex justify-between my-4">
                  <p className="text-[.7em]">
                    {moment(article.pub_date).format("LL")}
                  </p>
                  <span className="bg-black text-white px-4 py-2 rounded">
                    {article.section_name}
                  </span>
                </div>
                <div>
                  <span>{article.abstract} </span>
                </div>
                <div>
                  <span className="">
                    <a className="font-semibold" href={article.web_url}>
                      Read More...
                    </a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default UserSearch;

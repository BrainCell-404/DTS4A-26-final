import React, { useEffect } from "react";

import storseMostPopular, {
  selectPopulars,
  selectGetPopular,
} from "../../Stores/Store2";

const LatestNews = () => {
  const Articles = storseMostPopular(selectPopulars);
  const getLatestArticles = storseMostPopular(selectGetPopular);

  useEffect(() => {
    getLatestArticles();
  }, [getLatestArticles]);

  return (
    <div className="px-5 lg:px-16 lg:py-12">
      <h1 className="my-4 text-3xl font-bold sm:my-5">Latest News</h1>
      <div className="content grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lf:gap-x-5 lf:gap-y-8">
        {Articles?.map((article, index) => {
          return (
            <div
              key={index}
              className="flex justify-center basis-3/12 hover:scale-105"
            >
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href={article.url}>
                  <img
                    className="rounded-t-lg"
                    src={article.media[0]["media-metadata"][2].url}
                    alt=""
                  />
                </a>
                <div className="p-4 flex flex-col content-around">
                  <h5 className="text-sm text-black font-bold mb-2 break-all">
                    {article.title}
                  </h5>
                  <div className="bot-info flex flex-row justify-around mt-12">
                    <span className="text-[.8em] opacity-40 font-semibold">
                      {article.published_date}
                    </span>
                    <span className="text-[.8em] opacity-40 font-semibold">
                      {article.source}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestNews;

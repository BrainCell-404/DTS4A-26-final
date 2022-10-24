import React, { useEffect } from "react";
import moment from "moment-timezone";

import storesHotArticles, {
  selectArticles,
  selectGetHotArticles,
} from "../../Stores/Store1";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const HotArticle = () => {
  const Articles = storesHotArticles(selectArticles);
  const getHotArticles = storesHotArticles(selectGetHotArticles);

  useEffect(() => {
    getHotArticles();
  }, [getHotArticles]);

  return (
    <div className="px-5 lg:mx-16">
      <h1 className="my-4 text-3xl font-bold sm:my-5">Hot Topics</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96"
      >
        {Articles?.map((article, index) => {
          return (
            <SwiperSlide key={index} className="flex flex-row">
              <div className="left z-0 flex basis-12/12 lg:basis-8/12 flex-col lg:mr-10">
                <img
                  className="flex w-full rounded-md"
                  src={article.multimedia[0].url}
                  alt="example"
                />
                <div className="z-30 -mt-[145px] sm:-mt-[210px] md:-mt-[300px] md:my-20 lg:-mt-[150px] xl:-mt-[330px] ml-10 text-white">
                  <a
                    className="text-xl m-2 font-bold md:text-2xl"
                    href={article.url}
                  >
                    {article.title}
                  </a>
                  <div className="flex flex-row mt-8">
                    <span className="mr-4">
                      {moment(article.created_date).format("LLL")}
                    </span>
                    <span className="ml-4">{article.byline}</span>
                  </div>
                </div>
              </div>
              <div className="right basis-4/12 my-2 mr-2 hidden lg:block">
                <span className="text-zinc-600 font-bold text-xl">
                  Caption :
                </span>
                <br />
                <p className="text-xl font-semibold mt-8 shadow p-5 text-ellipsis overflow-hidden indent-8 break-words whitespace-pre-wrap">
                  {article.abstract}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HotArticle;

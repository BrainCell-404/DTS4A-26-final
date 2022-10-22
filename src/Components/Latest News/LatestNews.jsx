import React from "react";

const LatestNews = () => {
  return (
    <div className="px-5 lg:px-16 lg:py-12">
      <h1 className="my-4 text-3xl font-bold sm:my-5">Latest News</h1>
      <div className="content grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lf:gap-x-5 lf:gap-y-8">
        <div className="flex justify-center basis-3/12">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div className="p-4">
              <h5 className="text-black text-base font-bold mb-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                eius.
              </h5>
              <div className="bot-info flex flex-row justify-around mt-10">
                <span className="text-[.7em] opacity-40">Created Date</span>
                <span className="text-[.7em] opacity-40">Created By</span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center basis-3/12">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div className="p-4">
              <h5 className="text-black break-keep text-base font-bold mb-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                eius.
              </h5>
              <div className="bot-info flex flex-row justify-around mt-10">
                <span className="text-[.7em] opacity-40">Created Date</span>
                <span className="text-[.7em] opacity-40">Created By</span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center basis-3/12">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div className="p-4">
              <h5 className="text-black text-base font-bold mb-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                eius.
              </h5>
              <div className="bot-info flex flex-row justify-around mt-10">
                <span className="text-[.7em] opacity-40">Created Date</span>
                <span className="text-[.7em] opacity-40">Created By</span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center basis-3/12">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                className="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div className="p-4">
              <h5 className="text-black text-base font-bold mb-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                eius.
              </h5>
              <div className="bot-info flex flex-row justify-around mt-10">
                <span className="text-[.7em] opacity-40">Created Date</span>
                <span className="text-[.7em] opacity-40">Created By</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

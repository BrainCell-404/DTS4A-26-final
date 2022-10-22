import React from "react";

// import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// image
import carouselImage from "../../Assets/pexels-mihai-vlasceanu-1403653.jpg";

const HotArticle = () => {
  // const baseUrl =
  // "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=H52AIIGjpQmDWCHTmqRgnT60BHsRwgNZ";

  // const [hotArticles, setHotArticles] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(baseUrl)
  //     .then((res) => {
  //       setHotArticles(res?.data.results.splice(0, 9));
  //       console.log("from state ", hotArticles);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="px-20 py-5">
      <h1 className="my-5 text-4xl font-bold">Hot Topics</h1>
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
        <SwiperSlide className="flex flex-row">
          <div className="left z-0 flex basis-8/12 mr-10 flex-col">
            <img
              className="flex w-full rounded-md"
              src={carouselImage}
              alt="example"
            />
            <div className="z-30 md:-mt-96 -top-2 ml-10 text-white">
              <a className="text-2xl my-2 font-bold" href="...">
                Test Title
              </a>
              <div className="flex flex-row mt-8">
                <span className="mr-4">Created Date</span>
                <span className="ml-4">Created By</span>
              </div>
            </div>
          </div>
          <div className="right flex basis-4/12 my-2 mr-2 ">
            <p className="text-ellipsis overflow-hidden indent-8 break-words whitespace-pre-wrap text-base ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              voluptatibus libero optio mollitia provident cum quisquam! Saepe
              voluptatem quis similique, impedit officiis repellendus unde,
              fugit sapiente hic, mollitia magnam omnis vero aut temporibus.
              Deleniti, quaerat porro amet perferendis, inventore nam assumenda
              non vero, dolorem nisi id doloribus voluptas? Possimus vero
              explicabo, amet ullam ipsam enim vel eius nemo assumenda est aut
              quae, omnis laboriosam dolorem voluptatibus asperiores doloribus
              obcaecati veniam error accusantium vitae. Architecto perspiciatis
              doloribus sequi ea, amet natus neque facere maiores inventore
              tempore veritatis repellendus esse, nihil asperiores repudiandae
              molestiae eaque sed delectus non quas praesentium suscipit
              voluptatum?
            </p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HotArticle;

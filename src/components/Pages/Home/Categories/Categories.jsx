import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slider1 from "../../../../assets/home/slide1.jpg";
import slider2 from "../../../../assets/home/slide2.jpg";
import slider3 from "../../../../assets/home/slide3.jpg";
import slider4 from "../../../../assets/home/slide4.jpg";
import slider5 from "../../../../assets/home/slide5.jpg";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";

const Categories = () => {
  return (
    <div className="my-16">
      <SectionTytle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Online"}
      ></SectionTytle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h4 className="text-3xl uppercase text-center text-base-200 mb-16 -mt-16">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h4 className="text-3xl uppercase text-center text-base-200 mb-16 -mt-16">
            Pizzas
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h4 className="text-3xl uppercase text-center text-base-200 mb-16 -mt-16">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h4 className="text-3xl uppercase text-center text-base-200 mb-16 -mt-16">
            Desserts
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h4 className="text-3xl uppercase text-center text-base-200 mb-16 -mt-16">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;

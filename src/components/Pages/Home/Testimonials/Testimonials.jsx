import React, { useEffect, useState } from "react";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mb-16 p-8">
      <SectionTytle
        subHeading="What Our Clients Say"
        heading="Testimonials"
      ></SectionTytle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="px-8 md:px-24 flex flex-col items-center text-center">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <FaQuoteLeft className="my-10 w-24 h-24"></FaQuoteLeft>
                <p>{review.details}</p>
                <h4 className="text-[#CD9003] mt-2 text-3xl">{review.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;

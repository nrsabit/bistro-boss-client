import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import MenuItems from "../MenuItems/MenuItems";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet} from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <MenuItems></MenuItems>
      <FeaturedItem></FeaturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import MenuItems from '../MenuItems/MenuItems';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <MenuItems></MenuItems>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
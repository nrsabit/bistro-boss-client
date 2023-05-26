import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import MenuItems from '../MenuItems/MenuItems';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <MenuItems></MenuItems>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;
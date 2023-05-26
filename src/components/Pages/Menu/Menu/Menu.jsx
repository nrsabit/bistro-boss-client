import React from "react";
import { Helmet } from "react-helmet-async";
import bgMenu from "../../../../assets/menu/banner3.jpg";
import saladBg from "../../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../../assets/menu/soup-bg.jpg";
import pizzaBg from "../../../../assets/menu/pizza-bg.jpg";
import dessertBg from "../../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../../hooks/useMenu";
import MenusByCatagory from "../../../Shared/MenusByCategory/MenusByCatagory";

const Menu = () => {
  const [menu] = useMenu();
  const offeredMenu = menu.filter((item) => item.category === "offered");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/*Banner and Offered Menues  */}
      <MenusByCatagory
        heading="Today's Offer"
        subHeading="Don't miss"
        menu={offeredMenu}
        bgImage={bgMenu}
        title="Our Menu"
        subtitle="Would you like to try a Dish?"
        btnText="ORDER YOUR FAVOURITE FOOD"
      ></MenusByCatagory>

      {/*Desserts  */}
      <MenusByCatagory
        menu={dessertMenu}
        bgImage={dessertBg}
        title="Desserts"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btnText="ORDER YOUR FAVOURITE FOOD"
      ></MenusByCatagory>

      {/*Pizzas  */}
      <MenusByCatagory
        menu={pizzaMenu}
        bgImage={pizzaBg}
        title="Pizzas"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btnText="ORDER YOUR FAVOURITE FOOD"
      ></MenusByCatagory>

      {/*Salads  */}
      <MenusByCatagory
        menu={saladMenu}
        bgImage={saladBg}
        title="Salads"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btnText="ORDER YOUR FAVOURITE FOOD"
      ></MenusByCatagory>

      {/*Soups  */}
      <MenusByCatagory
        menu={soupMenu}
        bgImage={soupBg}
        title="Soups"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        btnText="ORDER YOUR FAVOURITE FOOD"
      ></MenusByCatagory>
    </div>
  );
};

export default Menu;

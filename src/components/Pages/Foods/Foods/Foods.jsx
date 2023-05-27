import React, { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import foodBg from "../../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../../hooks/useMenu";
import FoodTab from "../FoodTab/FoodTab";
import { useParams } from "react-router-dom";

const Foods = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
  const [menu] = useMenu();
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const [tabIndex, setTabIndex] = useState(categories.indexOf(category));
  return (
    <div>
      <Cover
        bg={foodBg}
        title="Our Foods"
        subtitle="Would you like to try a Dish?"
      ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="my-16">
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Pizzas</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel><FoodTab items={saladMenu}></FoodTab> </TabPanel>
        <TabPanel><FoodTab items={pizzaMenu}></FoodTab> </TabPanel>
        <TabPanel><FoodTab items={soupMenu}></FoodTab> </TabPanel>
        <TabPanel><FoodTab items={dessertMenu}></FoodTab> </TabPanel>
        <TabPanel><FoodTab items={drinksMenu}></FoodTab> </TabPanel>
      </Tabs>
    </div>
  );
};

export default Foods;

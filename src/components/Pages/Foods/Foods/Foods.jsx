import React, { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import foodBg from "../../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../../hooks/useMenu";
import FoodCard from "../../../Shared/FoodCard/FoodCard";

const Foods = () => {
  const [menu] = useMenu();
  const drinksMenu = menu.filter((item) => item.category === "drinks");
  const saladMenu = menu.filter((item) => item.category === "salad");
  const soupMenu = menu.filter((item) => item.category === "soup");
  const pizzaMenu = menu.filter((item) => item.category === "pizza");
  const dessertMenu = menu.filter((item) => item.category === "dessert");
  const [tabIndex, setTabIndex] = useState(0);
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

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                saladMenu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                pizzaMenu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                soupMenu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                dessertMenu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                drinksMenu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Foods;

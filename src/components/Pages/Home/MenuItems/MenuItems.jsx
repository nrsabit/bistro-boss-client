import React, { useEffect, useState } from "react";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";
import SharedMenu from "../../../Shared/SharedMenu/SharedMenu";

const MenuItems = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menues.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-16">
      <SectionTytle
        heading="From Our Menu"
        subHeading="Check it Out"
      ></SectionTytle>
      <div className="grid md:grid-cols-2 gap-6 p-8 md:p-0">
        {menu.map((item) => (
          <SharedMenu key={item._id} item={item}></SharedMenu>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-2 text-black text-center mt-12">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default MenuItems;

import React, { useEffect, useState } from "react";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";
import SharedMenu from "../../../Shared/SharedMenu/SharedMenu";
import useMenu from "../../../../hooks/useMenu";

const MenuItems = () => {
  const [menu] = useMenu()
  const popularMenu = menu.filter(item => item.category === 'popular')
  return (
    <section className="mb-16">
      <SectionTytle
        heading="From Our Menu"
        subHeading="Check it Out"
      ></SectionTytle>
      <div className="grid md:grid-cols-2 gap-6 p-8 md:p-0">
        {popularMenu.map((item) => (
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

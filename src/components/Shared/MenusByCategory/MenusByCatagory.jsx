import React from "react";
import Cover from "../Cover/Cover";
import SectionTytle from "../SectionTytle/SectionTytle";
import SharedMenu from "../SharedMenu/SharedMenu";
import { Link } from "react-router-dom";

const MenusByCatagory = ({
  heading,
  subHeading,
  menu,
  bgImage,
  title,
  subtitle,
  btnText,
  category,
}) => {
  return (
    <div>
      <Cover bg={bgImage} title={title} subtitle={subtitle}></Cover>
      {heading && (
        <SectionTytle heading={heading} subHeading={subHeading}></SectionTytle>
      )}
      <div className="grid md:grid-cols-2 gap-6 p-8 md:p-0">
        {menu.map((item) => (
          <SharedMenu key={item._id} item={item}></SharedMenu>
        ))}
      </div>
      <div className="flex justify-center mb-16">
        <Link to={`/foods/${category ? category : "salad"}`}>
          <button className="btn btn-outline border-0 border-b-2 text-black text-center mt-12">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenusByCatagory;

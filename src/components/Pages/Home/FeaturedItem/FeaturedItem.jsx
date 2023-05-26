import React from "react";
import bg from "../../../../assets/home/featured.jpg";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";

const FeaturedItem = () => {
  return (
    <section
      className="mb-16 bg-fixed bg-cover bg-center bg-blend-overlay bg-opacity-50 bg-black text-white md:py-24 p-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <SectionTytle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTytle>
      <div className="md:flex gap-16 justify-center items-center md:w-3/4 mx-auto">
        <div>
          <img src={bg} alt="" />
        </div>
        <div>
          <p className="mt-10 md:mt-0">March 20, 2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-2 text-white mt-4">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItem;

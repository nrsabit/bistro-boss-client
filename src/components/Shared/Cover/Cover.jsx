import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ bg, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bg}
      bgImageAlt="the cover"
      strength={-200}
      className="mb-16"
    >
      <div className="my-32 w-3/4 mx-auto text-center">
        <div className="bg-[#151515] bg-opacity-60 text-center py-12 md:py-28 text-white">
            <h4 className="text-4xl md:text-7xl font-bold uppercase mb-2">{title}</h4>
            <p>{subtitle}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

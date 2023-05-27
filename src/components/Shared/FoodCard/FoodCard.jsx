import React from "react";

const FoodCard = ({ item }) => {
  const { price, image, name, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="text-white bg-black py-1 px-2 rounded absolute top-0 right-0 mt-4 mr-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
        <button className="btn btn-outline border-0 border-b-2 bg-slate-200 text-[#bb8606] text-center mt-4">
          Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

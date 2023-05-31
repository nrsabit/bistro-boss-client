import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { price, image, name, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refech] = useCart();
  const navigate = useNavigate();
  const handleAddToCart = (item) => {
    if (user && user.email) {
      const newItem = {
        itemId: _id,
        price,
        name,
        image,
        recipe,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refech()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Do You want to login?",
        text: "You won't be able to use cart without login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="text-white bg-black py-1 px-2 rounded absolute top-0 right-0 mt-4 mr-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-2 bg-slate-200 text-[#bb8606] text-center mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

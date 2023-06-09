import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart = [], refetch] = useCart();
  const total =
    cart.length > 0 ? cart.reduce((sum, item) => item.price + sum, 0) : 0;
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bistro-boss-server-kohl.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="w-4/5 mx-auto">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTytle
        subHeading="My Cart"
        heading="Wanna Add More?"
        className="mt-6"
      ></SectionTytle>
      <div className="uppercase flex justify-between items-center gap-8 font-semibold mb-8">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total Price: ${total.toFixed(2)}</h3>
        <Link to="/dashboard/payment">
          <button className="btn bg-[#D1A054] text-white btn-sm border-0">
            Pay
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] bg-opacity-70">
            <tr>
              <th className="bg-transparent">#</th>
              <th className="bg-transparent">Food Image</th>
              <th className="bg-transparent">Name</th>
              <th className="bg-transparent">Price</th>
              <th className="bg-transparent">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Food Image" />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600 text-white btn-xs"
                    >
                      <FaTrashAlt></FaTrashAlt>{" "}
                    </button>
                  </th>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;

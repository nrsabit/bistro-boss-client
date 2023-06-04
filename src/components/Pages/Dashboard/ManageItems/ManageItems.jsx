import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";
import useMenu from "../../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleEdit = (item) => {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Editing will be Available Soon",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
        axiosSecure.delete(`/menus/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="w-4/5 mx-auto">
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTytle
        subHeading="Hurry up"
        heading="Manage All Items"
      ></SectionTytle>
      <h3 className="font-bold text-3xl my-4">Total Items: {menu?.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] bg-opacity-70">
            <tr>
              <th className="bg-transparent">#</th>
              <th className="bg-transparent">Item Image</th>
              <th className="bg-transparent">Item Name</th>
              <th className="bg-transparent">Price</th>
              <th className="bg-transparent">Edit</th>
              <th className="bg-transparent">Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.length > 0 ? (
              menu?.map((item, index) => (
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
                      onClick={() => handleEdit(item)}
                      className="btn btn-ghost bg-[#D1A054] bg-opacity-70 text-white btn-xs"
                    >
                      <FaEdit></FaEdit>
                    </button>
                  </th>
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

export default ManageItems;

import React from "react";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_upload_token = import.meta.env.VITE_Image_UPload_Token;
  const img_upload_url = `https://api.imgbb.com/1/upload?&key=${img_upload_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_upload_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgURL = imgData.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          axiosSecure.post("/menus", newItem).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Menu Item Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="w-4/5 mx-auto">
      <Helmet>
        <title>Bistro Boss | Add an Item</title>
      </Helmet>
      <SectionTytle
        subHeading="What's new?"
        heading="Add an Item"
      ></SectionTytle>
      <form
        className="bg-base-200 px-8 py-6 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
          {errors.recipe && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="md:flex gap-4 my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full"
              placeholder="Select Category"
            >
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
            {errors.category && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price $"
              className="input input-bordered w-full"
            />
            {errors.price && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
          {errors.details && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <input
          {...register("image", { required: true })}
          type="file"
          className="file-input bg-[#D1A054] bg-opacity-70 mt-4 file-input-bordered w-full max-w-xs"
        />
        {errors.image && (
          <span className="text-red-500">This field is required</span>
        )}
        <div className="mt-4">
          <input
            type="submit"
            className="btn btn-sm text-white bg-[#D1A054] bg-opacity-70 border-0"
            value="Add Item"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;

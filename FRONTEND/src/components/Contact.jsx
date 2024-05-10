import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className=" flex h-screen items-center justify-center">
      <div className="shadow-2xl p-4 w-[600px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <h3 className="font-bold text-xl">Contact Us</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              className="w-80 px-3 py-1 rounded-md outline-none"
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              className="w-80 px-3 py-1 rounded-md outline-none"
              type="email"
              placeholder="Enter Your Name"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              className="w-80 px-3 py-1 rounded-md outline-none"
              type="email"
              placeholder="Type your Message"
            />
          </div>
          <div className="mt-6">
            <button className="text-start bg-blue-500 mx-5 text-white px-4 py-1 rounded-md hover:bg-blue-700 duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

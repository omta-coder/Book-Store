import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form" 
import Login from "./Login";
import axios from 'axios'
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname  || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    }
   await axios.post("http://localhost:3000/user/signup",userInfo)
   .then((res)=>{
    console.log(res.data);
    if(res.data){
      toast.success('Signup Successfully!');
      navigate(from, { replace: true })
    }
    localStorage.setItem("BookUsers",
      JSON.stringify(res.data.user)
    )
   })
   .catch((err)=>{
    if (err.response) {
      console.log(err);
      toast.error("Error: " + err.response.data.message);
    }
   })
  }
  return (
    <>
      <div className=" flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center items-center"
              method="dialog"
            >
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-xl">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Fullname"
                  className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("name", { required: true })} 
                  />
                  <br />
                  {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("email", { required: true })} 
                  />
                  <br />
                  {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 py-1 rounded-md outline-none"
               {...register("password", { required: true })} 
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="flex items-center justify-around mt-6">
                <button className="text-start bg-pink-500 mx-5 text-white px-4 py-1 rounded-md hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-sm text-slate-300 font-thin">
                  Already have an account?{" "}
                  <button
                    className="underline text-blue-600 cursor-pointer"
                    onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                  >
                    Login
                  </button>{" "}
                  <Login/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

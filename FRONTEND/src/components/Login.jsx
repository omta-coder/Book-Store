import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form className="flex flex-col justify-center items-center" method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          
          <h3 className="font-bold text-xl">Login</h3>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 py-1 rounded-md outline-none"
            />
          </div>
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-80 px-3 py-1 rounded-md outline-none"
            />
          </div>
          <div className="flex items-center justify-around mt-6">
            <button className="text-start bg-pink-500 mx-5 text-white px-7 py-1 rounded-md hover:bg-pink-700 duration-200">
              Login
            </button>
            <p className="text-sm text-slate-300 font-thin">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="underline text-blue-600 cursor-pointer"
                >
                Signup
              </Link>
            </p>
          </div>
          </form >
        </div>
      </dialog>
    </div>
  );
};

export default Login;

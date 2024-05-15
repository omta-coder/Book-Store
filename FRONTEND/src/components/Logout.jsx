import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("BookUsers");
        toast.success("Logout Successfully!")
    } catch (error) {
        toast.error("Error: " + error)
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-800 duration-300 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

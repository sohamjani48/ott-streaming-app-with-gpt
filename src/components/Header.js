import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handlerSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute p-8 w-56 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className=" w-52"
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="Logo"
      />
      {user && (
        <div className="flex p-2 gap-6">
          <img
            className="w-12 h-12 rounded-lg"
            src={user.photoURL}
            alt="userIcon"
          />
          <button
            className="text-white bg-red-700 px-2 rounded-md font-bold"
            onClick={handlerSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { APP_LOGO } from "../utils/consts";
import { auth } from "../utils/firebase";
import { loginUser, logoutUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          loginUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(logoutUser());
        navigate("/");
      }
    });

    //Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

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
    <div className="absolute p-4 w-56 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className=" w-44 h-12" src={APP_LOGO} alt="Logo" />
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

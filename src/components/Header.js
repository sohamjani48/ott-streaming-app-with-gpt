import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeLanguage } from "../utils/configSlice";
import { APP_LOGO, SUPPORTED_LANGUAGES } from "../utils/consts";
import { auth } from "../utils/firebase";
import { addSearchResults, toggleGPTSearchView } from "../utils/gptSlice";
import { loginUser, logoutUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

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

  const handleGPTSearchClick = () => {
    dispatch(addSearchResults({ movies: null, movieNames: null }));
    dispatch(toggleGPTSearchView());
  };

  const handleLanuageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute p-4 bg-gradient-to-b from-black z-10 w-full flex justify-between flex-col md:flex-row">
      <img className=" w-44 h-12 mx-auto md:mx-0" src={APP_LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2 gap-6">
          {showGPTSearch && (
            <select
              className=" bg-gray-900 text-white rounded-lg px-2"
              onChange={handleLanuageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.idenifier} value={language.idenifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button className="p-2" onClick={handleGPTSearchClick}>
            {showGPTSearch ? (
              <FaHome className="text-white text-2xl" />
            ) : (
              <FaSearch className="text-white text-2xl" />
            )}
          </button>
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

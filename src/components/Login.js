import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { BACKGROUND_IMAGE_URL, PHOTO_URL } from "../utils/consts";
import { auth } from "../utils/firebase";
import { loginUser } from "../utils/userSlice";
import {
  checkValidEmail,
  checkValidName,
  checkValidPassword,
} from "../utils/validate";
import Header from "./Header";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInFrom, setIsSignInForm] = useState(true);

  const [emailError, setEmailerror] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };

  const handleButtonClick = () => {
    setEmailerror(checkValidEmail(email.current.value));
    setPasswordError(checkValidPassword(password.current.value));
    !isSignInFrom && setNameError(checkValidName(name.current.value));

    if (emailError || passwordError || nameError) return;

    if (!isSignInFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                loginUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorMessage = error.message;
              setPasswordError(errorMessage + "-" + passwordError);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setPasswordError(errorMessage + "-" + passwordError);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setPasswordError("Entered Email and Password is Wrong");
        });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      ></div>
      <Header />
      <form
        className="absolute p-12 bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl mb-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInFrom && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className={`p-3 m-4 rounded-lg w-full bg-gray-700 text-white focus:bg-white focus:text-black focus:placeholder-black ${
                nameError ? "border border-red-600" : ""
              } `}
            />
            {nameError && (
              <p className="px-4 font-semibold text-md">{nameError}</p>
            )}
          </>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className={`p-3 m-4 rounded-lg w-full bg-gray-700 text-white focus:bg-white focus:text-black focus:placeholder-black ${
            emailError ? "border border-red-600" : ""
          } `}
        />
        {emailError && (
          <p className="px-4 font-semibold text-md">{emailError}</p>
        )}
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className={`p-3 m-4 rounded-lg w-full bg-gray-700 text-white focus:bg-white focus:text-black focus:placeholder-black ${
            passwordError ? "border border-red-600" : ""
          }`}
        />
        {passwordError && (
          <p className="px-4 font-semibold text-md">{passwordError}</p>
        )}
        <button
          className="w-full m-4 p-3 bg-red-700 rounded-lg font-bold my-4"
          onClick={handleButtonClick}
        >
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 font-semibold underline-offset-2 underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInFrom
            ? "New Here? Sign up here."
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

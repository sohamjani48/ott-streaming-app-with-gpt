import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInFrom);
  };

  return (
    <div>
      {console.log(isSignInFrom)}
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Logo"
          className="flex h-full"
        />
      </div>
      <form className="absolute p-12 bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl mb-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-4 rounded-lg w-full bg-gray-700 text-white focus:bg-white focus:text-black focus:placeholder-black"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-4 rounded-lg w-full bg-gray-700 text-white focus:bg-white focus:text-black focus:placeholder-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-4 rounded-lg w-full bg-gray-700 text-white focus:bg-white focus:text-black focus:placeholder-black"
        />
        <button className="w-full m-4 p-3 bg-red-700 rounded-lg font-bold my-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 font-semibold underline-offset-2 underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInFrom
            ? "Already have an account? Sign In here"
            : "New Here? Sign up here."}
        </p>
      </form>
    </div>
  );
};

export default Login;

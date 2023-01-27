import React, { useState } from "react";
import MyProfile from "./Images/MyProfile.jpg";

function ResponsiveNavbar() {
  const [isHidden, setIsHidden] = useState(true);

  function toggleHidden() {
    setIsHidden(!isHidden);
  }

  return (
    <nav className="nav-fixed flex w-full flex-wrap items-center justify-between bg-white p-4">
      <div className="mr-6 flex items-center">
        <img
          className="h-16 w-16 rounded-full border-none"
          src={MyProfile}
          alt="kuyiba"
        />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center rounded border border-green-600 px-3 py-2 text-green-200 hover:border-green-800"
          onClick={toggleHidden}
        >
          <i className="fa fa-bars h-3 w-4 text-center"></i>
        </button>
      </div>
      <div
        className={`xs:hidden block w-full flex-grow sm:hidden lg:flex lg:w-auto lg:items-center ${
          isHidden ? "hidden" : ""
        }`}
        id="mobile"
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/home"
            className="nav-link mt-4 mr-4 block w-16 rounded-lg border p-2 hover:bg-green-600 hover:font-semibold lg:mt-0 lg:inline-block"
          >
            HOME
          </a>
          <a
            href="/contact"
            className="nav-link mt-4 mr-4 block w-20 rounded-lg border p-2 hover:bg-green-600  hover:font-semibold lg:mt-0 lg:inline-block"
          >
            COURSES
          </a>
          <a
            href="/pricing"
            className="nav-link mr-4 mt-4 flex w-32 rounded-lg border p-2 hover:bg-green-600 hover:font-semibold lg:mt-0 lg:inline-block"
          >
            LATEST UPDATES
          </a>
          <a
            href="/pricing"
            className="nav-link mr-4 mt-4  block w-16 rounded-lg border p-2 hover:bg-green-600 hover:font-semibold lg:mt-0 lg:inline-block"
          >
            HELP
          </a>
        </div>
        <div className="">
          <a
            href="#SignIn"
            className="nav-link  mt-4 mr-4 inline-block w-20 rounded-lg border p-2 hover:bg-green-600 hover:font-semibold lg:mt-0 lg:inline-block"
          >
            SIGN IN
          </a>
          <a
            href="#SignUp"
            className="nav-link  mt-4 mr-4 inline-block w-20 rounded-lg border p-2 hover:bg-green-600  hover:font-semibold lg:mt-0 lg:inline-block"
          >
            SIGN UP
          </a>
        </div>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;

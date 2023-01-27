import React from "react";
import MyLogo from "./Images/background-image4.jpg";

const Header = () => {
  return (
    <div className="h-56 w-full border-none bg-green-300 md:flex md:justify-center">
      <div className="w-4/5 md:flex md:justify-evenly ">
        <div className="block justify-center text-center md:mt-4 md:pt-6 ">
          <h3 className="p-4 uppercase">Welcome to kuyant pharmacourse</h3>
          <p className="capitalize">Your home of excellence</p>
        </div>
        <div className="my-4 flex items-center justify-center p-2">
          <img
            className="m-2 h-24 w-56 rounded-2xl border"
            src={MyLogo}
            alt="pharmacy - logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

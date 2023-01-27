import React from "react";
import MyFooterImage from "./Images/ant5.webp";

const Footer = () => {
  return (
    <div className="h-40 w-full bg-green-100">
      <div className="flex items-center justify-center p-2">
        <img
          className="m-3 h-20 w-20 rounded-full border"
          src={MyFooterImage}
          alt="organic"
        />
        <h3 className="m-2 p-2 text-center text-2xl">Kuyant pharmacourse</h3>
      </div>
      <div className="">
        <ul className="mb-3 flex content-center justify-around">
          <li>
            <a
              className="rounded-2xl border-none p-2 capitalize hover:bg-green-700 hover:text-white"
              href="/about"
            >
              about
            </a>
          </li>
          <li>
            <a
              className="rounded-2xl border-none p-2 capitalize hover:bg-green-700 hover:text-white"
              href="/about"
            >
              contact
            </a>
          </li>
          <li>
            <a
              className="rounded-2xl border-none p-2 capitalize hover:bg-green-700 hover:text-white"
              href="/about"
            >
              more sites
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

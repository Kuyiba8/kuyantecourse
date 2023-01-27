import React from "react";
import pharmacyTecImg from "./Images/ant1.webp";
import pharmacyImg from "./Images/ant3.webp";
import medicalImg from "./Images/ant4.webp";

const categories = [
  {
    id: 1,
    profession: "pharmacy technician books",
    image: pharmacyTecImg,
  },
  {
    id: 2,
    profession: "pharmacy books",
    image: pharmacyImg,
  },
  {
    id: 3,
    profession: "medical books",
    image: medicalImg,
  },
];

function Content() {
  const listItems = categories.map((categories) => (
    <li
      className="p-4 text-lg font-medium sm:flex md:block"
      key={categories.id}
    >
      <img
        src={categories.image}
        alt={categories.profession}
        className="m-4 h-20 w-20"
      />
      <a
        href="/books"
        className="m-1 flex justify-center rounded-2xl border-none p-2 hover:bg-green-400"
      >
        {categories.profession}
      </a>
    </li>
  ));
  return (
    <div className="container m-4 mx-auto w-3/5 content-center rounded-2xl border border-green-400">
      <div className="rounded-lg bg-white p-6">
        <ul className="text-center md:flex md:justify-evenly">{listItems}</ul>
      </div>
    </div>
  );
}

export default Content;

/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../Assets/imageLogo002.png";
import Button from "../../Components/Button/Index";

function SidebarAdmin() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-red-900 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img className="w-30 h-20 rounded-md" src={logoImage} alt="/" />
          <h1 className="text-3xl font-bold mr-5 sm:text-4xl text-white">
            {" "}
            BABYLAND.LK{" "}
          </h1>
          <ul className="hidden md:flex">
            <li className="m-2  text-white">
              <Link to="/gg">
                {" "}
                <button className="px-8 py-3"> Dashboard </button>{" "}
              </Link>
            </li>
            <li className="m-2  text-white">
              <Link to="/nannyTableAdmin">
                {" "}
                <button className="px-8 py-3"> Nannies </button>{" "}
              </Link>
            </li>
            <li className="m-2  text-white">
              <Link to="/">
                {" "}
                <button className="px-8 py-3"> Hired Nannies </button>{" "}
              </Link>
            </li>
            <li className="m-2  text-white">
              <Link to="/parenttableAdmin">
                {" "}
                <button className="px-8 py-3">
                  {" "}
                  Pending Assignments{" "}
                </button>{" "}
              </Link>
            </li>
            <li className="m-2  text-white">
              <Link to="/addAgent">
                {" "}
                <button className="px-8 py-3"> Agents </button>{" "}
              </Link>
            </li>
          </ul>
        </div>
        <button className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <i className="bi bi-list w-5" />
          ) : (
            <i className="bi bi-x-lg w-5" />
          )}
        </button>
      </div>
      <ul
        className={!nav ? "hidden" : "absolute bg-white w-full px-8 xl:hidden"}
      >
        <li className="border-b-2 border-zinc-300 w-full">
          {" "}
          <button className="px-8 py-3"> Home </button>{" "}
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <button className="px-8 py-3"> Nannies </button>{" "}
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <button className="px-8 py-3"> Your Nannies </button>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <button className="px-8 py-3"> Contact </button>{" "}
        </li>
        <div className="flex flex-col my-4">
          <Button title="Sign In" onClickHandler={() => null} />
        </div>
      </ul>
    </div>
  );
}

export default SidebarAdmin;

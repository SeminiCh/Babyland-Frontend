/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React from "react";
import { Link } from "react-router-dom";
import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";

function SuccessMessageSpecialRequirement() {
  return (
    <>
      <NavigationbarcustomerLogged />
      <div
        className="bg-green-100 border-l-4 border-green-500 py-44 px-32 "
        role="alert"
      >
        <p className="text-green-700 text-lg text-center ">
          You have Sucessfully Entered Special Note!{" "}
        </p>
        <Link to="/homeview">
          {" "}
          <button className="w-full text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-800">
            {" "}
            Go to Home{" "}
          </button>{" "}
        </Link>
      </div>
    </>
  );
}

export default SuccessMessageSpecialRequirement;

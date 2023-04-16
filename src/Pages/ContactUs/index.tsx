/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React from "react";

import HomeImg from "../../Assets/imageHome004.jpg";

import Footer from "../../Components/Footer";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";

function Home() {
  return (
    <>
      <Navigationbarcustomer />
      <div className="w-full">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src={HomeImg}
            alt="/"
          />
        </div>
        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h3 className="text-4xl font-bold pt-10 pb-5 text-center">
              {" "}
              <br />
              BABYLAND.lk
            </h3>
            <p className="py-4 text-xl text-slate-300 text-center">
              {" "}
              <ul className="text-gray-200 dark:text-gray-200">
                <li className="mb-4">
                  {" "}
                  No 06, <br />
                  New Shopping Complex, <br />
                  Ja-Ela Rd, <br />
                  Gampaha. <br />
                </li>
                <li>
                  033 22 45 843 <br />
                  075 67 89 089
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

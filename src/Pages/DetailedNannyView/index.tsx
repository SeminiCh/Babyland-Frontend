/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NannyImg from "../../Assets/imageNanny005.jpg";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";

function detailedNanny() {
  return (
    <>
      <Navigationbarcustomer />
      <main className="flex items-center justify-center h-screen">
        {" "}
        <div className="w-fit h-fit m-10 bg-blue-50 p-5">
          <div className="flex flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
              {" "}
              <img
                className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={NannyImg}
                alt=""
              />
              <div className="pt-5">
                <p className="text-2xl"> Ramya Perera </p>
                <p> Sunchine Caregivers pvt ltd </p>
                <div className="flex justify-between items-center">
                  <a
                    href="parentInformation"
                    className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Hire Her!
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="bg-slate-200 p-5 rounded-md">
                <p>
                  {" "}
                  Age : <span> 36 years </span>
                </p>
                <p>
                  {" "}
                  Nationality : <span> Sri Lankan </span>
                </p>
                <p>
                  {" "}
                  Religion : <span> Christian </span>
                </p>
                <p>
                  {" "}
                  Height/ Weight : <span> 169 cm / 65 kg </span>
                </p>
                <p>
                  {" "}
                  Age : <span> 36 years </span>
                </p>
              </div>
              <div className="bg-slate-200 p-5 rounded-md ">
                <h3> Reviews </h3>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  She is very punctual and polite and her loved my 2 years old
                  and 6 years old sons very much.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Mrs. Ramya never neglects her works she is very kind to my 4
                  years old daughter.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </main>
    </>
  );
}

export default detailedNanny;

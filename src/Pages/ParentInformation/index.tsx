/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Footer from "../../Components/Footer";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";

function parentInfomation() {
  return (
    <>
      <Navigationbarcustomer />
      <div className="p-24">
        <form>
          <h1> Parent Information </h1>
          <div className="grid gap-6 mb-6 md:grid-cols-2 bg-blue-200 p-10">
            <div>
              <label
                htmlFor="parentFullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Full name
              </label>
              <input
                type="text"
                id="parentFullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Semini Pathirana"
                required
              />
            </div>
            <div>
              <label
                htmlFor="parentRelationshipToBaby"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Relationship to Baby
              </label>
              <input
                type="text"
                id="parentRelationshipToBaby"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mother"
                required
              />
            </div>
            <div>
              <label
                htmlFor="parentAddress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address
              </label>
              <input
                type="text"
                id="parentAddress"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="No 133, Ragama rd, Nagoda"
                required
              />
            </div>
            <div>
              <label
                htmlFor="parentPhoneMoile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="parentPhoneMoile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="076 643 1861"
                required
              />
            </div>
            <div>
              <label
                htmlFor="parentNic"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                NIC
              </label>
              <input
                type="url"
                id="parentNic"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="997320395v"
                required
              />
            </div>
            <div>
              <label
                htmlFor="parentBabyAge"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Baby Age
              </label>
              <input
                type="number"
                id="parentBabyAge"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="4"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="parentNicCopy"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              NIC Copy
            </label>
            <input
              type="File"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default parentInfomation;

/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";

function nannyRating() {
  return (
    <>
      <NavigationbarcustomerLogged />
      <main className="pt-56 flex items-center justify-center h-screen">
        <div className="w-fit h-fit m-10 bg-blue-50 p-5">
          <div className="flex flex-row float-left">
            <div className="flex flex-col justify-between p-4 leading-normal">
              {" "}
              <span> Nanny Name</span>
              <span> Nanny Image </span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal float-right">
            <div className="bg-slate-200 p-5 rounded-md">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="ReviewRating"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Review
                  </label>
                  <input
                    type="text"
                    id="ReviewRating"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Review will help us to provide a better service"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                  <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                      <label
                        htmlFor="puntualityRating"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Punctuality
                      </label>
                      <select
                        id="puntualityRating"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="5"> 5 </option>
                        <option value="4"> 4 </option>
                        <option value="3"> 3 </option>
                        <option value="2"> 2 </option>
                        <option value="1"> 1 </option>
                      </select>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                      <label
                        htmlFor="neatnessRating"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Neatness
                      </label>
                      <select
                        id="neatnessRating"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="5"> 5 </option>
                        <option value="4"> 4 </option>
                        <option value="3"> 3 </option>
                        <option value="2"> 2 </option>
                        <option value="1"> 1 </option>
                      </select>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                      <label
                        htmlFor="kindnessRating"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Kindness
                      </label>
                      <select
                        id="kindnessRating"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="5"> 5 </option>
                        <option value="4"> 4 </option>
                        <option value="3"> 3 </option>
                        <option value="2"> 2 </option>
                        <option value="1"> 1 </option>
                      </select>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                      <label
                        htmlFor="communicationRating"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Communication
                      </label>
                      <select
                        id="communicationRating"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="5"> 5 </option>
                        <option value="4"> 4 </option>
                        <option value="3"> 3 </option>
                        <option value="2"> 2 </option>
                        <option value="1"> 1 </option>
                      </select>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                      <label
                        htmlFor="flexibilityRating"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Flexibility
                      </label>
                      <select
                        id="FlexibilittyRating"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="5"> 5 </option>
                        <option value="4"> 4 </option>
                        <option value="3"> 3 </option>
                        <option value="2"> 2 </option>
                        <option value="1"> 1 </option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default nannyRating;

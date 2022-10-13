/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Footer from "../../Components/Footer";
import NavigationbarAgent from "../../Lib/NavigationBarAgent";

function addNannyForm() {
  return (
    <>
      <NavigationbarAgent />
      <div className="p-24">
        <form>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Please fill this
          </h3>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="nannyPreparingChildMeal"
                  type="checkbox"
                  value="Preparing child Meal"
                  className="w-4 h-4 text-red-900 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:red-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nannyPreparingChildMeal"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Preparing child Meal
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="nannyPetLover"
                  type="checkbox"
                  value="Pet Lover"
                  className="w-4 h-4 text-red-900 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:red-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nannyPetLover"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pet Lover
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="nannyDifferentlyAbledCare"
                  type="checkbox"
                  value="Specialized in differently Abled child care"
                  className="w-4 h-4 text-red-900 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:red-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nannyDifferentlyAbledCare"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Specialized in differently Abled child care
                </label>
              </div>
            </li>
            <li className="w-full dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="nannyVegetarian"
                  type="checkbox"
                  value="Vegitarian"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nannyVegetarian"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Vegetarian
                </label>
              </div>
            </li>
          </ul>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="nannyFullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="nannyFullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Semini Pathirana"
                required
              />
            </div>
            <div>
              <label
                htmlFor="nannyAge"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Age
              </label>
              <input
                type="text"
                id="nannyAge"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="25"
                required
              />
            </div>
            <div>
              <label
                htmlFor="NannyReligion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Religion
              </label>
              <input
                type="text"
                id="NannyReligion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buddhism"
                required
              />
            </div>
            <div>
              <label
                htmlFor="nannyNationality"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nationality
              </label>
              <input
                type="text"
                id="nannyNationality"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Sri Lankan"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="nannyWeight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Weight
              </label>
              <input
                type="number"
                id="nannyWeight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="48"
                required
              />
            </div>

            <div>
              <label
                htmlFor="nannyHeight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Height
              </label>
              <input
                type="number"
                id="nannyHeight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="160"
                required
              />
            </div>
            <div>
              <label
                htmlFor="nannyWorkingHours"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Working Hours
              </label>
              <input
                type="text"
                id="nannyWorkingHours"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Weekdays 6AM to 8PM "
                required
              />
            </div>
            <div>
              <label
                htmlFor="nannyLeavePreferences"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Leave Preferences
              </label>
              <input
                type="text"
                id="nannyLeavePreferences"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1 Day per Month"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="nannyLanguages"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Languages
            </label>
            <input
              type="text"
              id="nannyLanguages"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sinhala, English"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="nannyExperience"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Experience
            </label>
            <input
              type="text"
              id="nannyExperience"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="5 years experience as a nanny"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="nannyQualification"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Qualifications
            </label>
            <input
              type="text"
              id="nannyQualification"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Certified Nanny at VTA"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="nannyQualificationFile"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Upload certifications here
            </label>
            <input
              type="file"
              id="nannyQualificationFile"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="nannyImage"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image
            </label>
            <input
              type="file"
              id="nannyImage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="agentCompanyName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company Name
            </label>
            <input
              type="text"
              id="agentCompanyName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sunflower Care Govers Providers Ltd."
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-900 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default addNannyForm;

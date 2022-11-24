/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";

import Footer from "../../Components/Footer";
import NavigationbarAgent from "../../Lib/NavigationBarAgent";

interface NannyFormData {
  nannyFullName: String;
  nannyNic: String;
  nannyAge: number;
  nannyReligion: String;
  nannyNationality: String;
  nannyWeight: number;
  nannyHeight: number;
  nannyLeavePreferences: String;
  nannyLanguage1: String;
  nannyLanguage2: String;
  nannyLanguage3: String;
  nannyWorkingHours: String;
  nannyQualification: String;
  nannyQualificationFile: String;
  nannyImage: String;
  nannyVegetaian: String;
  nannyPetLover: String;
  availability: String;
  nannyDifferentlyAbledCare: String;
  nannyEthnicity: String;
  nannyPreparingChildMeal: String;
  agentCompanyName: String;
}

function addNannyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<NannyFormData>({ mode: "onChange" });

  const onSubmit = handleSubmit(
    ({
      nannyFullName,
      nannyNic,
      nannyAge,
      nannyReligion,
      nannyNationality,
      nannyWeight,
      nannyHeight,
      nannyLeavePreferences,
      nannyLanguage1,
      nannyLanguage2,
      nannyLanguage3,
      nannyEthnicity,
      nannyWorkingHours,
      nannyQualification,
      nannyQualificationFile,
      nannyImage,
      nannyVegetaian,
      nannyPetLover,
      availability,
      nannyDifferentlyAbledCare,
      nannyPreparingChildMeal,
      agentCompanyName,
    }) => {
      const nanny = {
        nannyFullName,
        nannyNic,
        nannyAge,
        nannyReligion,
        nannyNationality,
        nannyWeight,
        nannyHeight,
        nannyLeavePreferences,
        nannyLanguage1,
        nannyLanguage2,
        nannyLanguage3,
        nannyEthnicity,
        nannyWorkingHours,
        nannyQualification,
        nannyQualificationFile,
        nannyImage,
        nannyVegetaian,
        nannyPetLover,
        availability,
        nannyDifferentlyAbledCare,
        nannyPreparingChildMeal,
        agentCompanyName,
      };
      fetch("http://localhost:8080/api/v1/nanny/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nanny),
      }).then(() => {
        console.log("New Nanny is added!");
      });
    },
  );
  return (
    <>
      <NavigationbarAgent />
      <div className="p-24">
        <form onSubmit={onSubmit}>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Please fill this
          </h3>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  {...register("nannyPreparingChildMeal", {})}
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
                  {...register("nannyPetLover", {})}
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
                  {...register("nannyDifferentlyAbledCare", {})}
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
                  {...register("nannyVegetaian", {})}
                  id="nannyVegetaian"
                  type="checkbox"
                  value="Vegitarian"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nannyVegetaian"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Vegetarian
                </label>
              </div>
            </li>
          </ul>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  {...register("nannyLanguage1", {})}
                  id="nannyLanguage1"
                  type="checkbox"
                  value="Sinhala"
                  className="w-4 h-4 text-red-900 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:red-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nannyLanguage1"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Sinhala
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  {...register("nannyLanguage2", {})}
                  id="nannyLanguage2"
                  type="checkbox"
                  value="English"
                  className="w-4 h-4 text-red-900 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:red-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nannyLanguage2"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  English
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  {...register("nannyLanguage3", {})}
                  id="nannyLanguage3"
                  type="checkbox"
                  value="Tamil"
                  className="w-4 h-4 text-red-900 bg-gray-100 rounded border-gray-300 focus:ring-red-500 dark:focus:red-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="nannyLanguage3"
                  className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Sinhala
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
                {...register("nannyFullName", {
                  required: true,
                })}
                type="text"
                id="nannyFullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Semini Pathirana"
              />
              <p className="text-red-600 text-xs">
                {errors.nannyFullName && "Invalid! Full Name Cannot Be empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="nannyNic"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                NIC
              </label>
              <input
                {...register("nannyNic", {
                  required: true,
                })}
                type="text"
                id="nannyNic"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="997300990V"
              />
              <p className="text-red-600 text-xs">
                {errors.nannyNic && "Invalid! NIC Cannot Be empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="
"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Age
              </label>
              <input
                {...register("nannyAge", {
                  required: true,
                })}
                type="number"
                id="nannyAge"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="25"
              />
              <p className="text-red-600 text-xs">
                {errors.nannyAge && "Invalid! Age Cannot Be empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="nannyReligion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Religion
              </label>
              <select
                {...register("nannyReligion", {
                  required: true,
                })}
                id="nannyReligion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Buddhism"> Buddhism </option>
                <option value="Christian"> Christian </option>
                <option value="Catholic"> Catholic </option>
                <option value="Islam"> Islam </option>
                <option value="Hindu"> Hindu </option>
              </select>
              <p className="text-red-600 text-xs">
                {errors.nannyReligion && "Invalid! Religion Cannot Be empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="nannyEthnicity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ethnicity
              </label>
              <select
                {...register("nannyEthnicity", {
                  required: true,
                })}
                id="nannyEthnicity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Sinhala"> Sinhala </option>
                <option value="Tamil"> Tamil </option>
                <option value="Burgher"> Burgher </option>
                <option value="Muslim"> Muslim </option>
                <option value="Malays"> Malays </option>
              </select>
              <p className="text-red-600 text-xs">
                {errors.nannyReligion && "Invalid! Religion Cannot Be empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="nannyNationality"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nationality
              </label>
              <select
                {...register("nannyNationality", {
                  required: true,
                })}
                id="nannyNationality"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Sri Lankan"> Sri Lankan </option>
                <option value="Non Sri Lankan"> Non Sri Lankan </option>
              </select>
              <p className="text-red-600 text-xs">
                {errors.nannyNationality &&
                  "Invalid! Nationality Cannot Be empty."}
              </p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="nannyWeight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Weight
              </label>
              <input
                {...register("nannyWeight", {
                  required: true,
                })}
                type="number"
                id="nannyWeight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="48"
              />
              <p className="text-red-600 text-xs">
                {errors.nannyWeight && "Invalid! Weight Cannot Be empty."}
              </p>
            </div>

            <div>
              <label
                htmlFor="nannyHeight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Height
              </label>
              <input
                {...register("nannyHeight", {
                  required: true,
                })}
                type="number"
                id="nannyHeight"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="160"
              />
              <p className="text-red-600 text-xs">
                {errors.nannyHeight && "Invalid! Height Cannot Be empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="nannyWorkingHours"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Working Hours
              </label>
              <select
                {...register("nannyWorkingHours", {
                  required: true,
                })}
                id="nannyWorkingHours"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Weekdays 8AM - 2PM"> Weekdays 8AM - 2PM </option>
                <option value="Full Time"> Full Time </option>
                <option value="Weekdays 6AM - 6PM"> Weekdays 6AM - 6PM </option>
                <option value="Weekdays+Saturday 6AM - 6PM">
                  {" "}
                  Weekdays+Saturday 6AM - 6PM{" "}
                </option>
                <option value="Weekdays+Saturday+Sunday 6AM - 6PMs">
                  {" "}
                  Weekdays+Saturday+Sunday 6AM - 6PM{" "}
                </option>
              </select>
              <p className="text-red-600 text-xs">
                {errors.nannyWorkingHours &&
                  "Invalid! Working Hours Cannot Be empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="nannyLeavePreferences"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Leave Preferences
              </label>
              <select
                {...register("nannyLeavePreferences", {
                  required: true,
                })}
                id="nannyLeavePreferences"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1 Day Per Month"> 1 Day Per Month </option>
                <option value="1 1/2 Days Per Month">
                  {" "}
                  1 1/2 Days Per Month{" "}
                </option>
                <option value="2 Days Per Month"> 2 Days Per Month </option>
                <option value="2 1/2 Days Per Month">
                  {" "}
                  2 1/2 Day Per Month{" "}
                </option>
                <option value="3 Day Per Month"> 3 Days Per Month </option>
                <option value="3 1/2 Day Per Month">
                  {" "}
                  3 1/2 Days Per Month{" "}
                </option>
              </select>
              <p className="text-red-600 text-xs">
                {errors.nannyLeavePreferences &&
                  "Invalid! Leave Preferences Cannot Be empty."}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="nannyQualification"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Qualification
            </label>
            <input
              {...register("nannyQualification", {
                required: true,
              })}
              type="text"
              id="nannyQualification"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="5 years experience as a nanny"
            />
            <p className="text-red-600 text-xs">
              {errors.nannyQualification &&
                "Invalid! Qualification Cannot Be empty."}
            </p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="nannyQualificationFile"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Upload certifications here
            </label>
            <input
              {...register("nannyQualificationFile", {
                required: true,
              })}
              type="file"
              id="nannyQualificationFile"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
            />
            <p className="text-red-600 text-xs">
              {errors.nannyQualificationFile &&
                "Please upload file! This Cannot Be empty."}
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="nannyImage"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image
            </label>
            <input
              {...register("nannyImage", {
                required: true,
              })}
              type="file"
              id="nannyImage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
            />
            <p className="text-red-600 text-xs">
              {errors.nannyImage && "Please upload file! This Cannot Be empty."}
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="agentCompanyName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company Name
            </label>
            <input
              {...register("agentCompanyName", {
                required: true,
              })}
              type="text"
              id="agentCompanyName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Sunflower Care Govers Providers Ltd."
            />
            <p className="text-red-600 text-xs">
              {errors.agentCompanyName &&
                "Invalid! Company Name Cannot Be empty."}
            </p>
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

/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import NannyService from "../../api/services/NannyService";

import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";

interface NannyRatingData {
  usernameCustomer: String;
  nannyNic: String;
  ratingValue: number;
  puntualityRating: number;
  communicationRating: number;
  kindnessRating: number;
  ratingComment: String;
}
type NannyInfoState = {
  nannyNic: string;
};
function nannyRating() {
  const selectElementForPuntuality = document.getElementById(
    "puntualityRating",
  ) as HTMLSelectElement;
  const selectElementForNeatness = document.getElementById(
    "ratingValue",
  ) as HTMLSelectElement;
  const selectElementForKindness = document.getElementById(
    "kindnessRating",
  ) as HTMLSelectElement;
  const selectElementForCommunication = document.getElementById(
    "communicationRating",
  ) as HTMLSelectElement;
  const selectedOptionValueForPuntuality = selectElementForPuntuality?.value;
  const selectedOptionValueForNeatness = selectElementForNeatness?.value;
  const selectedOptionValueForKindness = selectElementForKindness?.value;
  const selectedOptionValueForCommunication =
    selectElementForCommunication?.value;
  const intValueForPuntuality = parseInt(selectedOptionValueForPuntuality, 10);
  const intValueForNeatness = parseInt(selectedOptionValueForNeatness, 10);
  const intValueForKindness = parseInt(selectedOptionValueForKindness, 10);
  const intValueForCommunication = parseInt(
    selectedOptionValueForCommunication,
    10,
  );
  const nannyDetail = useLocation();
  const { nannyNic } = nannyDetail.state as NannyInfoState;
  const [nannyData, setNannyData] = useState<any>([]);

  useEffect(() => {
    async function fetchNannyData() {
      const response = await NannyService.getNannyByNic(nannyNic);
      if (response) {
        setNannyData(response?.data);
      }
    }
    fetchNannyData();
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NannyRatingData>({ mode: "onChange" });

  const onSubmit = handleSubmit(
    ({
      usernameCustomer,
      nannyNic,
      ratingValue,
      puntualityRating,
      communicationRating,
      kindnessRating,
      ratingComment,
    }) => {
      const nannyRating = {
        usernameCustomer,
        nannyNic: nannyData.nannyNic,
        ratingValue: intValueForNeatness,
        puntualityRating: intValueForPuntuality,
        communicationRating: intValueForCommunication,
        kindnessRating,
        ratingComment,
      };
      fetch("http://localhost:8080/api/v1/nannyRating/save", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(nannyRating),
      }).then(() => {
        // eslint-disable-next-line no-console
        console.log("New nanny rating is added!");
      });
    },
  );
  return (
    <>
      <NavigationbarcustomerLogged />
      <main className="pt-56 flex items-center justify-center h-screen">
        <div className="w-fit h-fit m-10 bg-blue-50 p-5">
          <div className="flex flex-row float-left">
            <div className="flex flex-col justify-between p-4 leading-normal">
              {" "}
              <img
                className="object-cover w-72 h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={nannyData.nannyImg}
                alt="nanny"
              />
              <span> {nannyData.nannyFullName} </span>
            </div>
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal float-right">
            <div className="bg-slate-200 p-5 rounded-md">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="ReviewRating"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your Review
                  </label>
                  <input
                    {...register("ratingComment", {
                      required: true,
                    })}
                    type="text"
                    id="ratingComment"
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
                        {...register("puntualityRating", {
                          required: true,
                        })}
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
                        htmlFor="ratingValue"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Neatness
                      </label>
                      <select
                        {...register("ratingValue", {
                          required: true,
                        })}
                        id="ratingValue"
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
                        {...register("kindnessRating", {
                          required: true,
                        })}
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
                        {...register("communicationRating", {
                          required: true,
                        })}
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
                </div>
                <button
                  type="submit"
                  className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-900 dark:focus:ring-blue-800"
                >
                  Rate
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default nannyRating;

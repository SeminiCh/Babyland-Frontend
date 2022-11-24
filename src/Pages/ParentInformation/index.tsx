/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import NannyService from "../../api/services/NannyService";
import Footer from "../../Components/Footer";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";

interface ParentFormData {
  parentFullName: String;
  parentRelationshipToBaby: String;
  parentAddress: String;
  parentPhoneMoile: String;
  parentNic: String;
  parentBabyAge: String;
  parentNicCopy: String;
  nannyNic: String;
}

type NannyInfoState = {
  nannyNIC: string;
};

function parentInfomation() {
  const nannyDetails = useLocation();
  const { nannyNIC } = nannyDetails.state as NannyInfoState;
  const [nannyData, setNannyData] = useState<any>([]);

  useEffect(() => {
    async function fetchNannyData() {
      const response = await NannyService.getNannyByNic(nannyNIC);
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
  } = useForm<ParentFormData>({ mode: "onChange" });

  const onSubmit = handleSubmit(
    ({
      parentFullName,
      parentRelationshipToBaby,
      parentAddress,
      parentPhoneMoile,
      parentNic,
      parentBabyAge,
      parentNicCopy,
      nannyNic,
    }) => {
      const parent = {
        parentFullName,
        parentRelationshipToBaby,
        parentAddress,
        parentPhoneMoile,
        parentNic,
        parentBabyAge,
        parentNicCopy,
        nannyNic,
      };
      fetch("http://localhost:8080/api/v1/parent/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parent),
      }).then(() => {
        // eslint-disable-next-line no-console
        console.log("New Parent is added!");
      });
    },
  );
  return (
    <>
      <Navigationbarcustomer />
      <div className="p-24">
        <form onSubmit={onSubmit}>
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
                {...register("parentFullName", {
                  required: true,
                })}
                type="text"
                id="parentFullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Semini Pathirana"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.parentFullName &&
                  "Invalid! Mparent Name Cannot be Empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="parentRelationshipToBaby"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Relationship to Baby
              </label>
              <input
                {...register("parentRelationshipToBaby", {
                  required: true,
                })}
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
                {...register("parentAddress", {
                  required: true,
                })}
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
                {...register("parentPhoneMoile", {
                  required: true,
                })}
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
                {...register("parentNic", {
                  required: true,
                })}
                type="text"
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
                {...register("parentBabyAge", {
                  required: true,
                })}
                type="text"
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
              {...register("parentNicCopy", {
                required: true,
              })}
              type="text"
              id="parentNicCopy"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
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
              placeholder="997320395v"
              required
            />
          </div>
          <p> {nannyData.nannyNic}</p>
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

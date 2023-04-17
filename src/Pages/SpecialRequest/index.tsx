/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import NannyService from "../../api/services/NannyService";
import Footer from "../../Components/Footer";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";
import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";

interface RequestFormData {
  specialFullName: String;
  specialAddress: String;
  specialPhoneMobile: String;
  specialNote: String;
  specialContractTime: String;
}

function parentInfomation() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestFormData>({ mode: "onChange" });

  const onSubmit = handleSubmit(
    ({
      specialFullName,
      specialAddress,
      specialPhoneMobile,
      specialNote,
      specialContractTime,
    }) => {
      const specialrequest = {
        specialFullName,
        specialAddress,
        specialPhoneMobile,
        specialNote,
        specialContractTime: "No",
      };
      fetch("http://localhost:8080/api/v1/specialreq/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(specialrequest),
      }).then(() => {
        // eslint-disable-next-line no-console
        console.log("New Parent is added!");
        navigate("/sucessMessageSpecialRequest");
      });
    },
  );
  return (
    <>
      <NavigationbarcustomerLogged />
      <div className="p-24">
        <form onSubmit={onSubmit}>
          <h1> Please Enter Your Special Nanny Requirement </h1>
          <div className="grid gap-6 mb-6 md:grid-cols-2 bg-blue-200 p-10">
            <div>
              <label
                htmlFor="usernameCustomer"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your FullName*
              </label>
              <input
                {...register("specialFullName", {
                  required: true,
                })}
                type="text"
                id="specialFullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="P Amali Perera"
              />
            </div>
            <p className="text-red-600 text-xs">
              {errors.specialFullName && "Invalid! FullName cannot be empty."}
            </p>
            <div>
              <label
                htmlFor="specialAddress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address*
              </label>
              <input
                {...register("specialAddress", {
                  required: true,
                })}
                type="text"
                id="specialAddress"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="No 05, Yagoda, Gampaha"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.specialAddress && "Invalid! Address Cannot be Empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="specialPhoneMobile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Contact Number
              </label>
              <input
                {...register("specialPhoneMobile", {
                  required: true,
                })}
                type="text"
                id="specialPhoneMobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="07XXXXXXXX"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.specialPhoneMobile &&
                  "Invalid! Contact number Cannot be Empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="specialNote"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Requirement
              </label>
              <input
                {...register("specialNote", {
                  required: true,
                })}
                type="text"
                id="specialNote"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.specialNote &&
                  "Invalid! Contact number Cannot be Empty."}
              </p>
            </div>
          </div>

          {/* <div className="mb-6">
            <label
              htmlFor="parentNCopy"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              NIC Copy
            </label>
            <input
              type="file"
              id="parentNCopy"
              onChange={onChangeNicParent}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="parentImg"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Parent Image
            </label>
            <input
              type="file"
              id="parentImg"
              onChange={onChangeParentPhoto}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div> */}

          <button
            type="submit"
            className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            // onClick={(e) => {
            //   const url = `http://localhost:8080/api/v1/nanny/update/${nannyData.nannyNic}`;
            //   fetch(url, {
            //     method: "PUT",
            //     body: JSON.stringify({
            //       availability: "No",
            //       nannyNiC: nannyData.nannyNic,
            //     }),
            //   })
            //     .then((response) => {
            //       if (!response.ok) {
            //         throw new Error("Something Went Wrong");
            //       }
            //     })
            //     .catch(() => {
            //       console.log(e);
            //     });
            // }}
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

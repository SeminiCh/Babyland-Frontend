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

interface NannyUpdateData {
  availability: String;
}

interface ParentFormData {
  parentFullName: String;
  parentRelationshipToBaby: String;
  parentOccupation: String;
  parentOccupationFather: String;
  parentAddress: String;
  parentCity: String;
  parentPhoneMoile: String;
  parentNic: String;
  parentBabyAge: String;
  parentBabbiesCount: String;
  parentImg: String;
  parentNCopy: String;
  nannyNic: String;
  parentMonth: String;
  ParentYear: String;
  parentTime: String;
  parentBabySpecialCare: String;
}

type NannyInfoState = {
  nannyNic: string;
};

function parentInfomation() {
  const navigate = useNavigate();
  const nannyDetails = useLocation();
  const { nannyNic: NIC } = nannyDetails.state as NannyInfoState;
  const [nannyData, setNannyData] = useState<any>([]);

  useEffect(() => {
    async function fetchNannyData() {
      const response = await NannyService.getNannyByNic(NIC);
      if (response) {
        setNannyData(response?.data);
      }
    }
    fetchNannyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let base64codeParentNic: string | number | readonly string[] | undefined;
  let base64codeParentPhoto: string | number | readonly string[] | undefined;
  const onLoadParentNic = (fileString: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    base64codeParentNic = fileString;
  };

  const getbase64ParentNic = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoadParentNic(reader.result);
    };
  };

  const onChangeNicParent = (e: any) => {
    const { files } = e.target;
    const file = files[0];
    getbase64ParentNic(file);
    console.log(base64codeParentNic);
  };

  // for certification
  const onLoadParentPhoto = (fileString: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    base64codeParentPhoto = fileString;
  };
  const getbase64FileNC = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoadParentPhoto(reader.result);
    };
  };
  const onChangeParentPhoto = (e: any) => {
    const { files } = e.target;
    const file = files[0];
    getbase64FileNC(file);
    console.log(base64codeParentPhoto);
  };
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
      parentOccupation,
      parentOccupationFather,
      parentCity,
      parentBabbiesCount,
      parentImg,
      parentBabySpecialCare,
      parentPhoneMoile,
      parentNic,
      parentBabyAge,
      parentMonth,
      ParentYear,
      parentTime,
      parentNCopy,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      nannyNic,
    }) => {
      const parent = {
        usernameCustomer: localStorage.getItem("username"),
        parentFullName,
        parentRelationshipToBaby,
        parentAddress,
        parentOccupation,
        parentOccupationFather,
        parentCity,
        parentBabbiesCount,
        parentImg: base64codeParentPhoto,
        parentBabySpecialCare,
        parentPhoneMoile,
        parentNic,
        parentBabyAge,
        parentMonth,
        ParentYear,
        parentTime,
        parentNCopy: base64codeParentNic,
        nannyNic: nannyData.nannyNic,
      };
      fetch("http://localhost:8080/api/v1/parent/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parent),
      }).then(async () => {
        // eslint-disable-next-line no-console
        console.log("New Parent is added!");

        const url = `http://localhost:8080/api/v1/nanny/update/status`;
        await fetch(url, {
          method: "PUT",
          body: JSON.stringify({
            availability: "No",
            nannyNic: nannyData.nannyNic,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Something Went Wrong");
            }

            console.log(response);

            navigate("/sucessbooking");
          })
          .catch(() => {
            console.log("E");
          });
      });
    },
  );
  return (
    <>
      <NavigationbarcustomerLogged />
      <div className="p-24">
        <form onSubmit={onSubmit}>
          <h1> Booking Information </h1>
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
                placeholder="Amali Perera"
              />
              <p className="text-red-600 text-xs">
                {errors.parentFullName &&
                  "Invalid! Parent Name Cannot be Empty."}
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
              />
              <p className="text-red-600 text-xs">
                {errors.parentRelationshipToBaby &&
                  "Invalid! Parent Relationship Cannot be Empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="parentOccupation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Occupation - Mother
              </label>
              <input
                {...register("parentOccupation", {
                  required: true,
                })}
                type="text"
                id="parentOccupation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p className="text-red-600 text-xs">
                {errors.parentOccupation &&
                  "Invalid! Mother - Occupation Cannot be Empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="parentOccupationFather"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Occupation - Father
              </label>
              <input
                {...register("parentOccupationFather", {
                  required: true,
                })}
                type="text"
                id="parentOccupationFather"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p className="text-red-600 text-xs">
                {errors.parentOccupationFather &&
                  "Invalid! Father - Occupation Cannot be Empty."}
              </p>
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
                placeholder="No XX, Ragama rd, Nagoda"
              />
              <p className="text-red-600 text-xs">
                {errors.parentAddress && "Invalid! Address Cannot be Empty."}
              </p>
            </div>
            <div>
              <label
                htmlFor="parentCity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Nearest City
              </label>
              <input
                {...register("parentCity", {
                  required: true,
                })}
                type="text"
                id="parentCity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p className="text-red-600 text-xs">
                {errors.parentCity && "Invalid! Nearest City Cannot be Empty."}
              </p>
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
                placeholder="07XXXXXXXX"
              />
              <p className="text-red-600 text-xs">
                {errors.parentPhoneMoile &&
                  "Invalid! Mobile Number Cannot be Empty."}
              </p>
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
                  minLength: 10,
                })}
                type="text"
                id="parentNic"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="997320395v"
              />
              <p className="text-red-600 text-xs">
                {errors.parentNic &&
                  "Invalid! Minimum Length should be 10 characters."}
              </p>
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
                placeholder="4 years"
              />
              <p className="text-red-600 text-xs">
                {errors.parentBabyAge &&
                  "Invalid! Baby Age should not be empty"}
              </p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="parentTime"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Contract Time
              </label>
              <select
                {...register("parentTime", {
                  required: true,
                })}
                id="parentTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="1 Month"> 1 Month</option>
                <option value="2 Months"> 2 Months </option>
                <option value="3 Months"> 3 Months </option>
                <option value="4 Months"> 4 Months </option>
                <option value="5 Months"> 5 Months </option>
                <option value="6 Months"> 6 Months </option>
              </select>
              <p className="text-red-600 text-xs">
                {errors.parentTime &&
                  "Invalid! Contract Time Should not be empty"}
              </p>
            </div>
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

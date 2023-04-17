/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NannyService from "../../api/services/NannyService";
import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";

type NannyInfoState = {
  nannyNic: string;
};

function DetailedNanny() {
  const navigate = useNavigate();
  const nannyDetails = useLocation();
  const { nannyNic } = nannyDetails.state as NannyInfoState;
  const [nannyData, setNannyData] = useState<any>([]);

  useEffect(() => {
    async function fetchNannyData() {
      const response = await NannyService.getNannyByNic(nannyNic);
      if (response) {
        setNannyData(response?.data);
      }
    }
    fetchNannyData();
  }, []);
  return (
    <>
      <NavigationbarcustomerLogged />
      <main className="flex items-center justify-center h-screen pt-20">
        {" "}
        <div className="w-fit h-fit m-10 bg-blue-50 p-5">
          <div className="flex flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
              {" "}
              <img
                className="object-cover w-72 h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={nannyData.nannyImg}
                alt=""
              />
              <div className="pt-5">
                <p className="text-2xl"> {nannyData.nannyFullName} </p>
                <div className="bg-slate-200 p-2 my-1 rounded-md w-56">
                  <h3 className="text-lg text-red-700 border-l-2">
                    {" "}
                    Special Notes{" "}
                  </h3>
                  <p className=" font-normal text-gray-700 dark:text-gray-400">
                    <span>
                      {" "}
                      {nannyData.nannyDifferentlyAbledCare !== "false"
                        ? nannyData.nannyDifferentlyAbledCare
                        : ""}{" "}
                    </span>
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span>
                      {" "}
                      {nannyData.nannyPetLover !== "false"
                        ? nannyData.nannyPetLover
                        : ""}{" "}
                    </span>
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span>
                      {" "}
                      {nannyData.nannyVegetaian !== "false"
                        ? nannyData.nannyVegetaian
                        : " "}{" "}
                    </span>
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span>
                      {" "}
                      {nannyData.nannyPreparingChildMeal !== "false"
                        ? nannyData.nannyPreparingChildMeal
                        : " "}{" "}
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    onClick={() =>
                      navigate("/parentInformation", {
                        state: { nannyNic: nannyData.nannyNic },
                      })
                    }
                  >
                    Hire Her!
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="bg-slate-200 p-5 rounded-md">
                <p>
                  {" "}
                  Age : <span> {nannyData.nannyAge} Years </span>
                </p>
                <p>
                  {" "}
                  Religion : <span> {nannyData.nannyReligion} </span>
                </p>
                <p>
                  {" "}
                  Ethnicity : <span> {nannyData.nannyEthniity}</span>
                </p>
                <p>
                  {" "}
                  Nationality : <span> {nannyData.nannyNationality} </span>
                </p>
                <p>
                  {" "}
                  Appearence :{" "}
                  <span>
                    {" "}
                    {nannyData.nannyHeight} cm , {nannyData.nannyWeight} kg{" "}
                  </span>
                </p>
                <p>
                  {" "}
                  Leave Preferences :{" "}
                  <span> {nannyData.nannyLeavePreferences}</span>
                </p>
                <p>
                  {" "}
                  Languages :{" "}
                  <span>
                    {" "}
                    {nannyData.nannyLanguage1 !== "false"
                      ? nannyData.nannyLanguage1
                      : ""}{" "}
                    ,{" "}
                    {nannyData.nannyLanguage2 !== "false"
                      ? nannyData.nannyLanguage2
                      : ""}{" "}
                    ,{" "}
                    {nannyData.nannyLanguage3 !== "false"
                      ? nannyData.nannyLanguage3
                      : ""}
                  </span>
                </p>
                <p>
                  {" "}
                  Working Hours : <span> {nannyData.nannyWorkingHours}</span>
                </p>
                <img
                  className="object-cover w-72 h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={nannyData.nannyQulFile}
                  alt=""
                />
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

export default DetailedNanny;

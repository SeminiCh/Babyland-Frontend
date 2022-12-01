/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NannyCard from "../../Components/NannyCard";
import Navigationbarcustomer from "../../Lib/Navigationbarcustomer";
// import { nannyData } from "../../Data/nannyData";
import Footer from "../../Components/Footer";
import image from "../../Assets/imageNanny005.jpg";
import NannyService from "../../api/services/NannyService";

function Nanny() {
  const navigate = useNavigate();
  const [nannyData, setNannyData] = useState<any>([]);

  useEffect(() => {
    async function fetchNannyData() {
      const response = await NannyService.getAllNannies();
      if (response) {
        setNannyData(response?.data);
      }
    }
    fetchNannyData();
  });

  return (
    <>
      <Navigationbarcustomer />
      <div className="w-full pt-24">
        <div className="max-w-[1240px] mx-auto px-2">
          <p className="text-2xl py-8 text-gray-500 text-center">
            {" "}
            <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
            </div>
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {nannyData.map((nanny: any) => {
              return (
                <div className="flex">
                  <NannyCard
                    key={nanny.id}
                    name={nanny.nannyFullName}
                    photo={nanny.nannyImg}
                    agent={nanny.agent.agentCompanyName}
                    experience={nanny.nannyQualification}
                    age={nanny.nannyAge}
                    firstdistrict={nanny.nannyPrefferedDistrict1}
                    secondDistrict={nanny.nannyPrefferedDistrict2}
                    image={image}
                    onNavigate={() =>
                      navigate(`/detailedNanny`, {
                        state: { nannyNic: nanny.nannyNic },
                      })
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nanny;

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-this-in-sfc */
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

  const searchChange = (event: any) => {
    useState({ [event.target.name]: event.target.value });
  };

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
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
                <button
                  type="button"
                  className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  onClick={searchChange}
                >
                  {" "}
                  Search{" "}
                </button>
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

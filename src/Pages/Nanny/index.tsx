/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NannyCard from "../../Components/NannyCard";
// import { nannyData } from "../../Data/nannyData";
import Footer from "../../Components/Footer";
import image from "../../Assets/imageNanny005.jpg";
import NannyService from "../../api/services/NannyService";
import NavigationbarcustomerLogged from "../../Lib/NavigationBarCustomerLogged";

function Nanny() {
  const navigate = useNavigate();
  const [nannyData, setNannyData] = useState<any>([]);

  const [queryWorkingHours, setQueryWorkingHours] = useState("");
  const [queryLanguages, setQueryLanguages] = useState("");
  const [queryDistricts, setQueryDistricts] = useState("");
  const [queryMinAge, setMinAge] = useState("");
  const [queryMaxAge, setMaxAge] = useState("");

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
      <NavigationbarcustomerLogged />
      <div className="w-full pt-24">
        <div className="max-w-[1240px] mx-auto px-2">
          <p className="text-2xl py-4 text-gray-500 text-center">
            {" "}
            <div className=" float-left w-fit flex justify-between items-center pb-1 dark:bg-gray-900">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <label
                  htmlFor="nannyWorkingHours"
                  className="pt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  Working Hours :{" "}
                </label>
                <select
                  id="nannyWorkingHours"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(event) => setQueryWorkingHours(event.target.value)}
                >
                  <option> </option>
                  <option value="Weekdays 8AM - 2PM">
                    {" "}
                    Weekdays 8AM - 2PM{" "}
                  </option>
                  <option value="Full Time"> Full Time </option>
                  <option value="Weekdays 6AM - 6PM">
                    {" "}
                    Weekdays 6AM - 6PM{" "}
                  </option>
                  <option value="Weekdays+Saturday 6AM - 6PM">
                    {" "}
                    Weekdays+Saturday 6AM - 6PM{" "}
                  </option>
                  <option value="Weekdays+Saturday+Sunday 6AM - 6PMs">
                    {" "}
                    Weekdays+Saturday+Sunday 6AM - 6PM{" "}
                  </option>
                </select>

                <label
                  htmlFor="nannyLanguages"
                  className="pt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {" "}
                  Languages She Speaks :{" "}
                </label>
                <select
                  id="nannyWorkingHours"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(event) => setQueryLanguages(event.target.value)}
                >
                  <option> </option>
                  <option value="Sinhala">Sinhala</option>
                  <option value="Tamil"> Tamil </option>
                  <option value="English">English</option>
                </select>
                <label
                  htmlFor="nannyPrefferedDistrict2"
                  className="pt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  District:
                </label>
                <select
                  id="nannyPrefferedDistrict2"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(event) => setQueryDistricts(event.target.value)}
                >
                  <option> </option>
                  <option value="Colombo"> Colombo </option>
                  <option value="Gampaha"> Gampaha </option>
                  <option value="Kaluthara"> Kaluthara </option>
                  <option value="Galle"> Galle </option>
                  <option value="Matara"> Matara </option>
                  <option value="Hambanthota"> Hambanthota </option>
                  <option value="Kurunegala"> Kurunegala </option>
                  <option value="Puttalam"> Puttalam </option>
                  <option value="Kandy"> Kandy </option>
                  <option value="Matale"> Matale </option>
                  <option value="NuwaraEliya"> NuwarEliya </option>
                  <option value="Ratnapura"> Ratnapura </option>
                  <option value="Kegalle"> Kegalle </option>
                  <option value="Anuradhapura"> Anurdhapura </option>
                  <option value="Polonnaruwa"> Polonnaruwa </option>
                  <option value="Ampara"> Ampara </option>
                  <option value="Batticoala"> Batticoala </option>
                  <option value="Trincomalee"> Trincomalee </option>
                  <option value="Badulla"> Badulla </option>
                  <option value="Monaragala"> Monaragala </option>
                  <option value="Jaffna"> Jaffna </option>
                  <option value="Vaunia"> Vaunia </option>
                  <option value="Mannar"> Mannar </option>
                  <option value="Kilinochchi"> Kilinochchi </option>
                  <option value="Mullaithiv"> Mullaithiv </option>
                  <option value="Any"> Any District </option>
                </select>
                <label
                  htmlFor="nannyAgeSearch"
                  className="pt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Age:
                </label>
                <input
                  type="number"
                  id="ageMin"
                  placeholder="Min"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(event) => setMinAge(event.target.value)}
                />
                <input
                  type="number"
                  id="ageMax"
                  placeholder="Max"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(event) => setMaxAge(event.target.value)}
                />
              </div>
            </div>
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
            {nannyData
              .filter(
                (nanny: any) =>
                  nanny.availability.toLowerCase().includes("yes") &&
                  nanny.nannyWorkingHours.includes(queryWorkingHours) &&
                  (nanny.nannyLanguage1.includes(queryLanguages) ||
                    nanny.nannyLanguage2.includes(queryLanguages) ||
                    nanny.nannyLanguage3.includes(queryLanguages)) &&
                  (nanny.nannyPrefferedDistrict1.includes(queryDistricts) ||
                    nanny.nannyPrefferedDistrict2.includes(queryDistricts)),
                // nanny.nannyAge > queryMinAge &&
                // nanny.nannyAge < queryMaxAge,
              )
              .map((nanny: any) => {
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

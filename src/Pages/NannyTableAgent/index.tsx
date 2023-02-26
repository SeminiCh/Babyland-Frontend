/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NannyService from "../../api/services/NannyService";
import Footer from "../../Components/Footer";
import NavigationbarAgent from "../../Lib/NavigationBarAgent";

function nannyTableAgent() {
  const navigate = useNavigate();
  const [nannyData, setNannyData] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchNannyDataAdmin() {
      const response = await NannyService.getAllNannies();
      if (response) {
        setNannyData(response?.data);
      }
    }
    fetchNannyDataAdmin();
  });

  return (
    <>
      <NavigationbarAgent />
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-24 pt-28">
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
              id="searchNanniesAdmin"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <a
          href="/AddNanny"
          className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          {" "}
          Add Nanny{" "}
        </a>
        <table className="w-fit text-sm text-gray-500 dark:text-gray-400">
          <tbody>
            <div>
              {nannyData
                .filter(
                  (nanny: any) =>
                    nanny.nannyNic.includes(query) ||
                    nanny.nannyFullName.toLowerCase().includes(query),
                )
                .map((nanny: any) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={nanny.id}
                    >
                      <td className="p-4">
                        <img
                          className="w-20 h-10 rounded-full "
                          src={nanny.nannyImg}
                          alt="nanny image"
                        />{" "}
                      </td>
                      <td className="p-4"> {nanny.nannyFullName} </td>
                      <td className="p-4"> {nanny.availability}</td>
                      <td className="p-4"> {nanny.nannyNic} </td>
                      <td className="p-4 "> {nanny.nannyAge} years</td>
                      <td className="p-4 ">
                        {" "}
                        {nanny.nannyPrefferedDistrict1}{" "}
                      </td>
                      <td className="p-4 ">
                        {" "}
                        {nanny.nannyPrefferedDistrict2}{" "}
                      </td>
                      <td className="p-4 "> {nanny.agent.agentCompanyName} </td>
                      <td className="p-4"> {nanny.nannyEthniity}</td>
                      <td className="p-4 "> {nanny.nannyReligion}</td>
                      <td className="p-4 "> {nanny.nannyQualification}</td>
                      <td className="p-4">
                        {" "}
                        <button
                          type="button"
                          className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          onClick={() =>
                            navigate("/detailedNannyAdmin", {
                              state: { nannyNic: nanny.nannyNic },
                            })
                          }
                        >
                          {" "}
                          See More{" "}
                        </button>{" "}
                      </td>
                      <td className="p-4">
                        <button
                          type="submit"
                          className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          onClick={(e) => {
                            const url = `http://localhost:8080/api/v1/nanny/delete/${nanny.nannyNic}`;
                            fetch(url, { method: "DELETE" })
                              .then((response) => {
                                if (!response.ok) {
                                  throw new Error("Something Went Wrong");
                                }
                              })
                              .catch(() => {
                                console.log(e);
                              });
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </div>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default nannyTableAgent;

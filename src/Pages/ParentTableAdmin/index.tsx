/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import ParentService from "../../api/services/ParentService";
import Footer from "../../Components/Footer";
import SidebarAdmin from "../SidebarAdmin";

function parentTableAdmin() {
  const [parentData, setParentData] = useState<any>([]);

  useEffect(() => {
    async function fetchParentDataAdmin() {
      const response = await ParentService.getAllParents();
      if (response) {
        setParentData(response?.data);
      }
    }
    fetchParentDataAdmin();
  });
  return (
    <>
      <SidebarAdmin />
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
              id="table-search-users"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <h2 className="text-lg text-red-800">
          {" "}
          Parent Information for Pending Assignment
        </h2>
        <table className="w-fit text-sm text-gray-500 dark:text-gray-400">
          <tbody>
            <div>
              {parentData.map((parent: any) => {
                return (
                  <>
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={parent.id}
                    />
                    <td className="p-4">{parent.parentNic}</td>
                    <td className="p-4">{parent.parentFullName}</td>
                    <td className="p-4">{parent.parentAddress}</td>
                    <td className="p-4">{parent.parentRelationshipToBaby}</td>
                    <td className="p-4">{parent.parentPhoneMoile}</td>
                    <td className="p-4">
                      Nanny Name : {parent.nanny.nannyFullName}
                    </td>
                    <td className="p-4">
                      {" "}
                      Agency : {parent.nanny.agent.agentCompanyName}
                    </td>
                    <td className="p-4">
                      <button
                        type="button"
                        className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        See More
                      </button>
                    </td>
                    <td className="p-4">
                      {" "}
                      <button
                        type="button"
                        className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        {" "}
                        Confirm{" "}
                      </button>{" "}
                    </td>
                  </>
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

export default parentTableAdmin;
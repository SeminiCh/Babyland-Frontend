/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import AgentService from "../../api/services/AgentService";

function agentTable() {
  const [agentData, setAgentData] = useState<any>([]);
  useEffect(() => {
    async function fetchAgentData() {
      const response = await AgentService.getAllAgents();
      if (response) {
        setAgentData(response?.data);
      }
    }
    fetchAgentData();
  });
  return (
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
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="col">Company Name</th>
            <th scope="col">Authorized Person</th>
            <th scope="col" className="py-3 px-6">
              Designation
            </th>
            <th scope="col" className="py-3 px-6">
              Authorized Person Nic
            </th>
            <th scope="col" className="py-3 px-6">
              Company Phone Number
            </th>
            <th scope="col" className="py-3 px-6">
              Personal Phone Number
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <div>
            {agentData.map((agent: any) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={agent.id}
                >
                  <td className="py-4"> {agent.agentCompanyName} </td>
                  <td className="py-4 "> {agent.agentEmployeeName} </td>
                  <td className="py-4 px-6">
                    {" "}
                    {agent.agentPersonDesignation}{" "}
                  </td>
                  <td className="py-4 px-6"> {agent.agentPersonNic} </td>
                  <td className="py-4 px-6"> {agent.agentCompanyPhone} </td>
                  <td className="py-4 px-6"> {agent.agentPersonPhone} </td>
                  <td className="py-4 px-6"> {agent.agentPersonEmail} </td>
                  <a
                    href="/"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </a>
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default agentTable;

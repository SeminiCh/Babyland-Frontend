/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import SidebarAdmin from "../SidebarAdmin";

import AgentTable from "../AgentTable";

interface AgentFormData {
  agentCompanyName: String;
  agentPassword: String;
  agentLicenseFile: String;
}

function AddAgentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgentFormData>({ mode: "onChange" });

  const onSubmit = handleSubmit(
    ({ agentCompanyName, agentPassword, agentLicenseFile }) => {
      const agent = {
        agentCompanyName,
        agentPassword,
        agentLicenseFile,
      };

      fetch("http://localhost:8080/api/v1/agent/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(agent),
      }).then(() => {
        console.log("New Agent is added!");
      });
    },
  );
  return (
    <>
      <SidebarAdmin />

      <AgentTable />

      <div className="p-24 h-screen pt-24">
        <form onSubmit={onSubmit}>
          <h1> Agent Information </h1>
          <div className="grid gap-6 mb-6 md:grid-cols-2 bg-blue-200 p-10">
            <div>
              <label
                htmlFor="agentCompanyName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Company Name
              </label>
              <input
                {...register("agentCompanyName", {
                  required: true,
                })}
                type="text"
                id="agentCompanyName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Reeta Caregivers Suppliers"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentCompanyName &&
                  "Invalid! Company Name should not be empty"}
              </p>
            </div>
            <div>
              <label
                htmlFor="agentPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <input
                {...register("agentPassword", {
                  required: true,
                })}
                type="password"
                id="agentPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="******"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentPassword &&
                  "Invalid! Password should not be empty"}
              </p>
            </div>
            <div>
              <label
                htmlFor="agentLicenseFile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enter the Certificate
              </label>
              <input
                {...register("agentLicenseFile", {
                  required: true,
                })}
                type="file"
                id="agentLicenseFile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddAgentForm;

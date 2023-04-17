/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useForm } from "react-hook-form";
import AgentTable from "../AgentTable";
import SidebarAdmin from "../SidebarAdmin";

// interface AgentFormData {
//   agentCompanyName: String;
//   agentPassword: String;
//   agentEmployeeName: String;
//   agentCompanyPhone: String;
//   agentPersonPhone: String;
//   agentPersonEmail: String;
//   agentPersonDesignation: String;
//   agentPersonNic: String;
//   agentOfficerImg: String;
//   agentLiFile: String;
//   agentCompanyAddress: String;
// }

function AddAgentForm() {
  // let base64code: string | number | readonly string[] | undefined;
  // let base64codeFile: string | number | readonly string[] | undefined;

  // const onLoad = (fileString: any) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   base64code = fileString;
  // };

  // const getbase64 = (file: any) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     onLoad(reader.result);
  //   };
  // };

  // const onChange = (e: any) => {
  //   const { files } = e.target;
  //   const file = files[0];
  //   getbase64(file);
  //   console.log(base64code);
  // };

  // // for certification
  // const onLoadFile = (fileString: any) => {
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   base64codeFile = fileString;
  // };
  // const getbase64File = (file: any) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     onLoadFile(reader.result);
  //   };
  // };
  // const onChangeFile = (e: any) => {
  //   const { files } = e.target;
  //   const file = files[0];
  //   getbase64File(file);
  //   console.log(base64codeFile);
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<AgentFormData>({ mode: "onChange" });

  // const onSubmit = handleSubmit(
  //   ({
  //     agentCompanyName,
  //     agentPassword,
  //     agentLiFile,
  //     agentEmployeeName,
  //     agentCompanyPhone,
  //     agentPersonPhone,
  //     agentPersonEmail,
  //     agentPersonDesignation,
  //     agentPersonNic,
  //     agentCompanyAddress,
  //     agentOfficerImg,
  //   }) => {
  //     const agent = {
  //       agentCompanyName,
  //       agentPassword,
  //       agentLiFile: base64codeFile,
  //       agentEmployeeName,
  //       agentCompanyPhone,
  //       agentPersonPhone,
  //       agentPersonEmail,
  //       agentPersonDesignation,
  //       agentPersonNic,
  //       agentOfficerImg: base64code,
  //       agentCompanyAddress,
  //     };

  //     fetch("http://localhost:8080/api/v1/agent/save", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(agent),
  //     }).then(() => {
  //       console.log("New Agent is added!");
  //     });
  //   },
  // );
  return (
    <>
      <SidebarAdmin />
      <AgentTable />
      {/* <div className="p-24 h-screen pt-24">
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
                htmlFor="agentCompanyAddress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Company Address
              </label>
              <input
                {...register("agentCompanyAddress", {
                  required: true,
                })}
                type="text"
                id="agentCompanyAddress"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentCompanyAddress &&
                  "Invalid! Company Address should not be empty"}
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
                htmlFor="agentEmployeeName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Authorized Person Name
              </label>
              <input
                {...register("agentEmployeeName", {
                  required: true,
                })}
                type="text"
                id="agentEmployeeName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ABC Perera"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentEmployeeName &&
                  "Invalid! Authorized officer Name should not be empty"}
              </p>
            </div>
            <div>
              <label
                htmlFor="agentPersonNic"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Authorized Person Nic
              </label>
              <input
                {...register("agentPersonNic", {
                  required: true,
                })}
                type="text"
                id="agentPersonNic"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentPersonNic &&
                  "Invalid! Authorized officer Nic should not be empty"}
              </p>
            </div>
            <div>
              <label
                htmlFor="agentCompanyPhone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Company Phone Number
              </label>
              <input
                {...register("agentCompanyPhone", {
                  required: true,
                })}
                type="text"
                id="agentCompanyPhone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentCompanyPhone &&
                  "Invalid! Company phone should not be empty"}
              </p>
            </div>
            <div>
              <label
                htmlFor="agentPersonPhone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Personal Phone Number
              </label>
              <input
                {...register("agentPersonPhone", {
                  required: true,
                  minLength: 10,
                })}
                type="text"
                id="agentPersonPhone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentPersonPhone &&
                  "Invalid! Authorized officer Phone should not be empty"}
              </p>
            </div>
            <div>
              <label
                htmlFor="agentPersonEmail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Personal Email
              </label>
              <input
                {...register("agentPersonEmail", {
                  required: true,
                })}
                type="text"
                id="agentPersonEmail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentPersonEmail &&
                  "Invalid! Email should not be empty"}
              </p>
            </div>
            <div>
              <label
                htmlFor="agentPersonDesignation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Authorized Person Designation
              </label>
              <input
                {...register("agentPersonDesignation", {
                  required: true,
                })}
                type="text"
                id="agentPersonDesignation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <p className="text-red-600 text-xs">
                {errors.agentPersonDesignation &&
                  "Invalid! Designation should not be empty"}
              </p>
            </div>
            <div>
              <label
                htmlFor="agentOfficerImg"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Person Image
              </label>
              <input
                type="file"
                onChange={onChange}
                id="agentOfficerImg"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="agentLiFile"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enter the Certificate
              </label>
              <input
                type="file"
                onChange={onChangeFile}
                id="agentLiFile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p className="text-red-600 text-xs">
                {errors.agentLiFile &&
                  "Please upload file! This Cannot Be empty."}
              </p>
            </div>

            <button
              type="submit"
              className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
}

export default AddAgentForm;

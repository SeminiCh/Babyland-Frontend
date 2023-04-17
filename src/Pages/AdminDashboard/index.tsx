/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import AgentService from "../../api/services/AgentService";
import NannyService from "../../api/services/NannyService";
import SidebarAdmin from "../SidebarAdmin";
import ParentService from "../../api/services/ParentService";

function adminDashboard() {
  const [nannyData, setNannyData] = useState<any>([]);

  useEffect(() => {
    async function fetchNannyDataAdmin() {
      const response = await NannyService.getAllNannies();
      if (response) {
        setNannyData(response?.data);
      }
    }
    fetchNannyDataAdmin();
  });
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
      {" "}
      <SidebarAdmin />
      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <h4> Nannies </h4>
            <table className="w-fit text-sm text-gray-500 dark:text-gray-400">
              <tbody>
                <div>
                  {nannyData.map((nanny: any) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={nanny.id}
                      >
                        <td className="p-4">
                          <img
                            className="w-10 h-10 rounded-full "
                            src={nanny.nannyImg}
                            alt="nanny image"
                          />{" "}
                        </td>
                        <td className="p-4"> {nanny.nannyFullName} </td>
                        <td className="p-4"> {nanny.availability}</td>
                        <td className="p-4 "> {nanny.nannyAge} years</td>
                      </tr>
                    );
                  })}
                </div>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <h4> Nannies </h4>
            <table className="w-fit text-sm text-gray-500 dark:text-gray-400">
              <tbody>
                <div>
                  {parentData.map((parent: any) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={parent.id}
                      >
                        <td className="p-4">
                          <img
                            className="w-10 h-10 rounded-full "
                            src={parent.parentFullName}
                            alt="nanny image"
                          />{" "}
                        </td>
                        <td className="p-4"> {parent.nanny.nannyFullName} </td>
                      </tr>
                    );
                  })}
                </div>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <table className="w-fit text-sm text-gray-500 dark:text-gray-400">
              <tbody>
                <div>
                  {agentData.map((agent: any) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={agent.id}
                      >
                        <td className="p-4">
                          <img
                            className="w-20 h-10 rounded-full "
                            src={agent.agentOfficerImg}
                            alt="agent image"
                          />{" "}
                        </td>
                        <td className="p-4"> {agent.agentCompanyName} </td>

                        <td className="p-4 "> {agent.agentEmployeeName} </td>
                      </tr>
                    );
                  })}
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default adminDashboard;

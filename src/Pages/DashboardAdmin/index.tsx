/* eslint-disable max-len */
import React from "react";
import PieChart from "../../Components/PieChart";
import SidebarAdmin from "../SidebarAdmin";
import AdminNannyChart from "../../Components/AdminNannyChart";
import AreaChart from "../../Components/AreaChart";

function DashboardAdmin() {
  return (
    <>
      <SidebarAdmin />
      <div className="pt-32">
        <div className="p-4 sm:ml-64">
          <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  {" "}
                  Nannies Count - 05{" "}
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  Customer Count - 04
                </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  Agent Count - 08
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center h-96 mb-4 rounded bg-red-700 dark:bg-gray-800">
                <AdminNannyChart />
              </div>
              <div className="flex items-center justify-center h-96 mb-4 rounded bg-red-700 dark:bg-gray-800">
                <PieChart />
              </div>
            </div>
            <div className="flex items-center justify-center h-96 mb-4 rounded bg-red-700 dark:bg-gray-800">
              <AreaChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;

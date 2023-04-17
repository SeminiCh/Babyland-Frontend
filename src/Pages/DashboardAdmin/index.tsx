/* eslint-disable max-len */
import React from "react";
import PieChart from "../../Components/PieChart";
import SidebarAdmin from "../SidebarAdmin";
import AdminNannyChart from "../../Components/AdminNannyChart";

function DashboardAdmin() {
  return (
    <>
      <SidebarAdmin />
      <div className="pt-32">
        <div className="p-4 sm:ml-64">
          <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center h-96 mb-4 rounded bg-red-700 dark:bg-gray-800">
                <AdminNannyChart />
              </div>
              <div className="flex items-center justify-center h-96 mb-4 rounded bg-red-700 dark:bg-gray-800">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;

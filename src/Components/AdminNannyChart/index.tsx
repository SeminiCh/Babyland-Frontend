/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";

import NannyService from "../../api/services/NannyService";

function nannyTableAdmin() {
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

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-24 pt-28">
      <table className="w-96 text-sm text-gray-500 dark:text-gray-400">
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
                      className="w-20 h-10 rounded-full "
                      src={nanny.nannyImg}
                      alt="nanny image"
                    />{" "}
                  </td>
                  <td className="p-4"> {nanny.nannyFullName} </td>
                  <td className="p-4"> {nanny.availability}</td>
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default nannyTableAdmin;

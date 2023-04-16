/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import SuggestionService from "../../api/services/SuggestionService";
import Footer from "../../Components/Footer";
import SidebarAdmin from "../SidebarAdmin";

function viewSuggestion() {
  const [suggestionData, setSuggestionData] = useState<any>([]);

  useEffect(() => {
    async function fetchSuggestionData() {
      const response = await SuggestionService.getAllSuggestions();
      if (response) {
        setSuggestionData(response?.data);
      }
    }
    fetchSuggestionData();
  });

  return (
    <>
      <SidebarAdmin />
      <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg p-24 pt-28">
          <table className="w-fit text-sm text-gray-500 dark:text-gray-400">
            <tbody>
              <div>
                {suggestionData.map((suggestion: any) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={suggestion.id}
                    >
                      <td className="p-4 "> {suggestion.suggestionComment} </td>
                    </tr>
                  );
                })}
              </div>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default viewSuggestion;

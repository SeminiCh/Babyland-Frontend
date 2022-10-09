/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from "react";

function InputText({ lbltitle, idTitle, placeholderWord }: any) {
  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {lbltitle}
        </label>
        <input
          type="text"
          id={idTitle}
          className="w-full h-52 bg-red-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block p-2.5 dark:bg-red-700 dark:border-red-800"
          placeholder={placeholderWord}
          required
        />
      </div>
    </div>
  );
}

export default InputText;

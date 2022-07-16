/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from "react";

function InputText() {
  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          First name
        </label>
        <input
          type="text"
          id="first_name"
          className="w-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
      </div>
    </div>
  );
}

export default InputText;

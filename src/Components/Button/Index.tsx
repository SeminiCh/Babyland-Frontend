import React from "react";

function Button({ title }: any) {
  return (
    <button
      type="button"
      // eslint-disable-next-line max-len
      className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-900"
    >
      {title}
    </button>
  );
}

export default Button;

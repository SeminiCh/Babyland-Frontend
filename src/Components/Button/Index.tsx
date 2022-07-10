import React from "react";

function Button({ title }: any) {
  return (
    <button
      type="button"
      className="text-base text-white bg-red-900 px-8 py-3 rounded-xl"
    >
      {title}
    </button>
  );
}

export default Button;

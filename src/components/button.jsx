import React from "react";

function Button({ onClick, className, innerText }) {
  return (
    <button
      onClick={onClick}
      className={`border border-green-500 group  p-2 rounded-xl text-lg bg-transparent text-[#828ead] overflow-hidden font-Mplus relative hover:text-[#c9d4f4] ${className}`}
    >
      <span
        className="bg-green-500 w-28 h-28 top-0 -left-40  absolute transition-all duration-200 ease-in-out
    group-hover:left-0 z-[-1] "
      ></span>
      {innerText}
    </button>
  );
}

export default Button;

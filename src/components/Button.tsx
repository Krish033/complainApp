import React from "react";

const Button = ({ children, onClick = null, type }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className="rounded-[20px] px-4 py-2 bg-green-300 text-xs text-black font-medium hover:bg-green-400"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

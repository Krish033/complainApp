import React from "react";

const AppBar = () => {
  return (
    <>
      <div className="flex items-center bg-white shadow-sm justify-between space-x-3 px-4 py-3">
        <button className="border-0 outline-0 bg-transparent">
          <i className="fa fa-bars"></i>
        </button>

        <div className="flex justify-end items-center gap-2">
          <div>
            <button className="focus:outline-none">
              <i className="fa fa-envelope"></i>
            </button>
          </div>

          <div className="flex items-center space-x-1">
            <i className="fa fa-user-circle"></i>
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBar;

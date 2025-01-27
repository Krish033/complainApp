import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import AppBar from "../components/AppBar";

const Main = () => {
  return (
    <>
      <main className="flex justify-content-start">
        <SideBar />
        <div className="w-screen bg-gray-200">
          <AppBar />
          <section className="p-3">
            <Outlet />
          </section>
        </div>
      </main>
    </>
  );
};

export default Main;

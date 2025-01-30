import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import AppBar from "../components/AppBar";

const Main = () => {
  return (
    <main className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main content */}
      <div className="flex flex-col w-full bg-gray-200 h-screen overflow-hidden">
        {/* App Bar */}
        <AppBar />

        {/* Scrollable section */}
        <section className="flex-1 px-[5em] pt-3 overflow-auto">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Main;

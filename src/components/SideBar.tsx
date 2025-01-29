import { NavLink } from "react-router-dom";
import { setActiveMenu } from "../features/slice/navigations";
import { useSelector, useDispatch } from "react-redux";

const SideBar = () => {
  const navigation = useSelector((state) => state.navigation.activeMenu); // Get active menu from Redux store
  const dispatch = useDispatch();

  // Function to handle menu click and set active menu in the Redux store
  const handleMenuClick = (menuName: string) => {
    dispatch(setActiveMenu(menuName));
  };

  return (
    <aside className="h-screen w-[250px] bg-white shadow-sm px-2">
      <div className="bg-white">
        <img
          className="block mx-auto mb-3 h-[64px] object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qYi3Ou4YrLzvoDJjiUHLjCmianjvx1nTvQ&s"
          alt="Profile"
        />
      </div>

      <ul className="">
        <li
          className={`px-2 ${
            navigation === "Dashboard" ? "text-blue-500" : ""
          } hover:text-blue-600`}
        >
          <NavLink
            to="/"
            className="font-medium text-xs"
            onClick={() => handleMenuClick("Dashboard")}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>

      <h1 className="font-medium mt-3 px-2 text-black">
        <i className="fa fa-caret-down"></i>{" "}
        <span className="text-xs font-bold">Master</span>
      </h1>

      <ul className="px-[.4em] mt-2">
        <li
          className={`px-4 ${
            navigation === "Staffs" ? "text-blue-500" : ""
          } hover:text-blue-600`}
        >
          <NavLink
            to="/admin/staffs"
            className="font-medium text-xs"
            onClick={() => handleMenuClick("Staffs")}
          >
            Staff Management
          </NavLink>
        </li>
        <li
          className={`px-4 ${
            navigation === "Categories" ? "text-blue-500" : ""
          } hover:text-blue-600`}
        >
          <NavLink
            to="/admin/categories"
            className="font-medium text-xs"
            onClick={() => handleMenuClick("Categories")}
          >
            Categories/Organizations
          </NavLink>
        </li>
        <li
          className={`px-4 ${
            navigation === "Batches" ? "text-blue-500" : ""
          } hover:text-blue-600`}
        >
          <NavLink
            to="/admin/batches"
            className="font-medium text-xs"
            onClick={() => handleMenuClick("Batches")}
          >
            Batches
          </NavLink>
        </li>
        <li
          className={`px-4 ${
            navigation === "Departments" ? "text-blue-500" : ""
          } hover:text-blue-600`}
        >
          <NavLink
            to="/admin/departments"
            className="font-medium text-xs"
            onClick={() => handleMenuClick("Departments")}
          >
            Departments
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;

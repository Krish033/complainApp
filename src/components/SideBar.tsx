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
    <aside className="h-screen w-[350px] bg-gray-200">
      {/* Logo Section */}
      <div className="bg-white">
        <img
          className="block mx-auto mb-3 h-[64px] object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qYi3Ou4YrLzvoDJjiUHLjCmianjvx1nTvQ&s"
          alt="Profile"
        />
      </div>

      <ul className="px-2">
        <li
          className={`px-3 py-2 ${
            navigation === "Dashboard" ? "bg-white rounded-sm" : ""
          } hover:bg-white rounded-sm`}
        >
          <NavLink
            to="/"
            className="font-medium text-sm"
            onClick={() => handleMenuClick("Dashboard")}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>

      <h1
        className="text-xs mt-3 px-3 text-gray-700"
        style={{ fontWeight: "600", letterSpacing: "5px" }}
      >
        MASTERS
      </h1>

      <ul className="mt-3 space-y-2 px-2">
        <li
          className={`px-3 py-2 ${
            navigation === "Staffs" ? "bg-white rounded-sm" : ""
          } hover:bg-white rounded-sm`}
        >
          <NavLink
            to="/admin/staffs"
            className="font-medium text-sm"
            onClick={() => handleMenuClick("Staffs")}
          >
            Staffs
          </NavLink>
        </li>
        <li
          className={`px-3 py-2 ${
            navigation === "Categories" ? "bg-white rounded-sm" : ""
          } hover:bg-white rounded-sm`}
        >
          <NavLink
            to="/admin/categories"
            className="font-medium text-sm"
            onClick={() => handleMenuClick("Categories")}
          >
            Categories
          </NavLink>
        </li>
        <li
          className={`px-3 py-2 ${
            navigation === "Batches" ? "bg-white rounded-sm" : ""
          } hover:bg-white rounded-sm`}
        >
          <NavLink
            to="/batches"
            className="font-medium text-sm"
            onClick={() => handleMenuClick("Batches")}
          >
            Batches
          </NavLink>
        </li>
        <li
          className={`px-3 py-2 ${
            navigation === "Departments" ? "bg-white rounded-sm" : ""
          } hover:bg-white rounded-sm`}
        >
          <NavLink
            to="/departments"
            className="font-medium text-sm"
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

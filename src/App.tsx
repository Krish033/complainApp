import { Routes, Route } from "react-router-dom";
import AccessRoute from "./layouts/auth/AccessRoute";
import Login from "./pages/Login";
import ProtectedRoute from "./layouts/auth/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Main from "./layouts/Main";
import Staffs from "./pages/Staffs";
import Categories from "./pages/Categories";
import Batches from "./pages/Batches";
import Departments from "./pages/Departments";
import MasterRoute from "./layouts/auth/MasterRoute";
import Master from "./pages/Master";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AccessRoute />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/faculty" element={<MasterRoute />}>
          <Route index element={<Master />} />
        </Route>

        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<Main />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="staffs" element={<Staffs />} />
            <Route path="categories" element={<Categories />} />
            <Route path="batches" element={<Batches />} />
            <Route path="departments" element={<Departments />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

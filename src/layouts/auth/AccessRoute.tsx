import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AccessRoute = ({ children }) => {
  // Replace this with your actual authentication state from Redux or Context
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Outlet />;
  }

  return <Navigate to="/admin/dashboard" replace />;
};

export default AccessRoute;

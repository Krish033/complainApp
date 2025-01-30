import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AccessRoute = () => {
  // Replace this with your actual authentication state from Redux or Context
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Outlet />;
  }

  if (user.role == "Faculty") {
    return <Navigate to="/faculty" replace />;
  }

  return <Navigate to="/admin/dashboard" replace />;
};

export default AccessRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MasterRoute = () => {
  // Replace this with your actual authentication state from Redux or Context
  const user = useSelector(
    (state) => state.auth.user && state.auth.user.role == "Faculty"
  );

  if (!user) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/" replace />;
  }
  // Render the child components if authenticated
  return <Outlet />;
};

export default MasterRoute;

import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export default function PublicRoutes({ children }) {
  const isLoggedIn = useAuth();
  const location = useLocation(); // This will now work correctly within a <Router> context

  if (isLoggedIn) {
    const redirectTo = location.state?.from || '/';
    return <Navigate to={redirectTo} />;
  }
  
  return children;
}

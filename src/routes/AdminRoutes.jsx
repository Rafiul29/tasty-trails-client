import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useAuthAdmin } from "../hooks/useAuthAdmin";

export default function AdminRoutes({ children }) {
  const isLoggedIn = useAuth();
  const isAdmin=useAuthAdmin()

  return isLoggedIn && isAdmin ? children : <Navigate to="/login" />;
}

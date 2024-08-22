import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useAuthaAmin } from "../hooks/useAuthaAmin";

export default function AdminRoutes({ children }) {
  const isLoggedIn = useAuth();
  const isAdmin=useAuthaAmin()

  return isLoggedIn && isAdmin ? children : <Navigate to="/login" />;
}

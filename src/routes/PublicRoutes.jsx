import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export default function PublicRoutes({ children }) {

  const isLoggedIn = useAuth();

  const location=useLocation()

  if(isLoggedIn){ 

    const redirectTo= location.state?.from || '/'
    return <Navigate to={redirectTo} />
  }
  return children
}

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticate, isAdmin } from "./fetchApi";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  return isAuthenticate() && !isAdmin() ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;

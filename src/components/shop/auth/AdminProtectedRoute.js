import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticate, isAdmin } from "./fetchApi";

const AdminProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (isAuthenticate() && isAdmin()) {
    return children;
  } else {
    return <Navigate to="/user/profile" state={{ from: location }} replace />;
  }
};

export default AdminProtectedRoute;

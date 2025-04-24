import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticate } from "./fetchApi";

const CartProtectedRoute = ({ children }) => {
  const location = useLocation();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return cart.length !== 0 && isAuthenticate() ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default CartProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, adminRoute, ...rest }) => {
  const token = localStorage.getItem("token");
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (adminRoute && (!user || !user.isAdmin)) {
    return <Navigate to="/not-authorized" />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;

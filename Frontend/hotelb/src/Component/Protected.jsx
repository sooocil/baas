// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ component: Component, path, ...rest }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/admin" />;
  }

  if ( role !== "admin") {
    return <Navigate to="/admin" />;
  }

  return <Component  />;
};

export default Protected;

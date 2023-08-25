import React, { useContext } from "react";
import { ShopContext } from "../management/context";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useContext(ShopContext);
  if (!user) {
    return <Navigate to="/home" />;
  }
}

export default ProtectedRoute;

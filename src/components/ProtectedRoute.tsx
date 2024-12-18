import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { JwtPayload } from "../types/auth";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem("authToken");
  const userId = sessionStorage.getItem("userId");

  const isValidUser = (): boolean => {
    if (!token || !userId) return false;

    try {
      const decodedToken = jwtDecode<JwtPayload>(token);
      console.log("decodedToken:", decodedToken);

      //Validate if the token's userId matches the stored one
      if (decodedToken.userId !== userId) return false;
    } catch (error) {
      console.error("Token inválido:", error);
      return false;
    }
    return true;
  };

  if (!isValidUser()) {
    sessionStorage.clear();
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

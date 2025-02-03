import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Dummy auth check - replace with actual auth logic later
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
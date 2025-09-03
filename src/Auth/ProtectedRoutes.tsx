import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useAuth } from "./useAuth";
type Props = { children: JSX.Element };
const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated,isLoading} = useAuth();
  if (isLoading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;

import { useContext } from "react";

import type { AuthContextType } from "./type";
import AuthContext from "./AuthProvider";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }
  return context;
};
import { createContext,  useEffect,  useState,  type ReactNode } from "react";
import type { AuthContextType } from "./type";
import { getItem, removeItem, setItem } from "../uitilities/storage/storage";
import { UserType } from "../Pages/Auth/service";
type AuthProviderProps = {
  children: ReactNode;
};
 const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData,setUserData]=useState<UserType|null>(null)


    useEffect(() => {
        const storedUser = getItem("user");
        if (storedUser) {
            console.log(storedUser)
            setIsAuthenticated(true);
            setUserData(storedUser);
        }
        setIsLoading(false);
    }, []);

  const login = (userData: UserType) => {
    setIsAuthenticated(true);
    setItem("user",userData)
  };

  const logout = () => {
    setIsAuthenticated(false);
    removeItem("user")
  };


  const value: AuthContextType = {
    isAuthenticated,
    login,
    logout,
    isLoading,
    userData
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext
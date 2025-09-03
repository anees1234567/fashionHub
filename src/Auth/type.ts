import { User } from "firebase/auth";
import { UserType } from "../Pages/Auth/service";

export type AuthContextType = {
    isAuthenticated: boolean;
    login: (param: UserType) => void;
    logout: () => void;
    isLoading:boolean,
    userData: UserType | null
    setUserData?: (user: UserType | null) => void
};
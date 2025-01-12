import { Dispatch, SetStateAction } from "react";

export interface IsLoggedInContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
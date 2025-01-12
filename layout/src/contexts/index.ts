import { createContext } from "react";
import { IsLoggedInContextType } from "../models/interfaces/Contexts";


export const IsLoggedInContext = createContext<IsLoggedInContextType | null>(null)
import { createContext } from "react";
import { TodoContextType, EntryRowContextType } from "../types";

export const TodoContext = createContext<TodoContextType | null>(null);
export const EntryRowContext = createContext<EntryRowContextType | null>(null);
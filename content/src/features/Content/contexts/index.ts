import { createContext } from "react";
import { TodoContextType, EntryRowType } from "../types";

export const TodoContext = createContext<TodoContextType | null>(null);
export const EntryRowContext = createContext<EntryRowType | null>(null);
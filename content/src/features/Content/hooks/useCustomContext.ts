import { Context, useContext } from 'react';

export function useCustomContext<T>(context: Context<T>): T {
  const ctx = useContext(context);
  if (!ctx) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return ctx;
}

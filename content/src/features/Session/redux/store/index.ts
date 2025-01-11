import { configureStore } from "@reduxjs/toolkit";
import localReducer from "../reducers";

const localStore = configureStore({
    reducer: localReducer
})

export type DispatchType = typeof localStore.dispatch
export type RootState = ReturnType<typeof localStore.getState>

export default localStore

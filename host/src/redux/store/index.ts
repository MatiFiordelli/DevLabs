import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

const hostStore = configureStore({
    reducer: reducer
})

export type DispatchType = typeof hostStore.dispatch
export type RootState = ReturnType<typeof hostStore.getState>

export default hostStore

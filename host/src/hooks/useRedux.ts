import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { DispatchType, RootState } from "../redux/store";

export const useAppDispatch = () => useDispatch<DispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
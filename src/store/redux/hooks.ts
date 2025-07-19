import { type TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "./modules/rootReducer";
import type { AppDispatch } from "./storeConfig";

export const useAppDispatch = (): ThunkDispatch<
  RootState,
  undefined,
  AnyAction
> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

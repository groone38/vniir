import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { posts } from "../../../features/model/reducers/Posts/PostsSlice";
import { users } from "./../../../features/model/reducers/Users/UsersSlice";

export const store = configureStore({
  reducer: {
    posts,
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

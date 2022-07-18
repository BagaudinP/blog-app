import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import post from "./slices/postSlice";
import filter from "./slices/filterSlice";
import favorite from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    post,
    filter,
    favorite,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

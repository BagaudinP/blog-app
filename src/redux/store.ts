import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import post from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    post,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
